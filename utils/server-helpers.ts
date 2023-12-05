import crypto, { pbkdf2Sync } from 'crypto'
import { AppError, BadRequestError, DBUser, DatabaseError, ForbiddenError, InternalServerError, NotFoundError, SquareData, Tokens, UnauthorizedError } from '../types'
import { SignJWT } from 'jose'
import { getOauthClient, getUserClient } from './square-client'
import { updateRefreshTokens } from '../lib/database'
import { NextApiResponse } from 'next'
import { isString } from './helpers'

export const hashPassword = async (password: string) => {
    try{
        const salt = crypto.randomBytes(128).toString('base64')
        const iterations = 10000
        const hash = await pbkdf2Sync(password, salt, iterations, 64, 'sha512')
        return {
            salt: salt,
            hash: hash.toString('hex'),
            iterations: iterations
        }
    } catch(e) {
        console.error('error: ', e)
        throw new InternalServerError('Error hashing password', 500)
    }
}

export const isPasswordCorrect = (savedHash: string, savedSalt: string, passwordAttempt: string) => {
    return savedHash == pbkdf2Sync(passwordAttempt, savedSalt, 10000, 64, 'sha512').toString('hex')
}

export const isTokenValid = async (accessToken: string) => {
    const { locationsApi } = getUserClient(accessToken)
    try {
        await locationsApi.listLocations()
        return true;
    } catch (e) {
        return false
    }
}

export const createJWT = async (payload: { sub?: string }) => {
    try{
        if(!isString(process.env.JWT_SIGNING_SECRET)) {
            console.error('JWT_SIGNING_SECRET is not set - check .env file')
            throw new InternalServerError('Server Error', 500)
        }
        const secret = process.env.JWT_SIGNING_SECRET || ''
        const iat = Math.floor(Date.now() / 1000)
        const exp = iat + 60 * 60 * 24 * 7 // 7 days    
        return await new SignJWT({ ...payload })
            .setProtectedHeader({
                alg: 'HS256',
                typ: 'JWT'
            })
            .setExpirationTime(exp)
            .setIssuedAt(iat)
            .setNotBefore(iat)
            .sign(new TextEncoder().encode(secret))
    } catch (e) {
        console.error('error: ', e)
        throw new InternalServerError('Error creating JWT', 500)
    }
}

export const encryptToken = function (tokens: string) {
    if (!process.env.REACT_AES_KEY) {
        console.error('REACT_AES_KEY is not set - check .env file')
        throw new InternalServerError('Internal Server Error', 500)
    }
    const iv = crypto.randomBytes(16).toString('hex').substring(0, 16)
    const algorithm = 'aes-256-cbc'
    const key: crypto.CipherKey = process.env.REACT_AES_KEY
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    let encrypted = cipher.update(tokens, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return {
        iv,
        encrypted
    }
}

export const decryptToken = function (tokens: string, iv: string): Tokens {
    if (!process.env.REACT_AES_KEY) {
        console.error('REACT_AES_KEY is not set - check .env file')
        throw new InternalServerError('Internal Server Error', 500)
    }
    const algorithm = 'aes-256-cbc'
    const key: crypto.CipherKey = process.env.REACT_AES_KEY
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    let decrypted = decipher.update(tokens, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return JSON.parse(decrypted)
}

export const getAuthUrlValues = () => {
    const base64Encode = (str: Buffer) => {
        return str.toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '')
    }

    const codeVerifier = base64Encode(crypto.randomBytes(32))

    const sha256 = (buffer: string) => {
        return crypto.createHash('sha256').update(buffer).digest()
    }
    const codeChallenge = base64Encode(sha256(codeVerifier))

    const state = base64Encode(crypto.randomBytes(12))

    // Set the code verifier and state in local storage so we can check it later
    const squareCodeVerifier = codeVerifier
    const squareState = state
    return {
        squareCodeChallenge: codeChallenge,
        squareCodeVerifier,
        squareState,
        baseURl: process.env.SQUARE_BASE_URL,
        appId: process.env.APP_ID,
    }
}

export const refreshTokens = async ({id, tokens, iv}: {
    id: string,
    tokens: string,
    iv: string
}) => {
    const { accessToken, refreshToken } = decryptToken(tokens,iv)
    const { oAuthApi } = getUserClient(accessToken)
    try {
        if (!isString(process.env.APP_ID)) {
            throw new AppError('APP_ID is not set - check .env file')
        }
        const { result } = await oAuthApi.obtainToken({
            clientId: process.env.APP_ID,
            refreshToken,
            grantType: 'refresh_token'
        })

        const content: SquareData = {
            tokens: JSON.stringify({
                accessToken: result.accessToken,
                refreshToken: result.refreshToken
            }),
            expiresAt: result.expiresAt,
            merchantId: result.merchantId
        }

        await updateRefreshTokens({
            id,
            squareData: content
        })
    } catch (e) {
        console.error('error: ', e)
        throw new InternalServerError('Error refreshing tokens', 500)
    }
}

export const deauthorizeToken = async ({
    user,
    revokeOnlyAccessToken,
    }:{
        user: any
        revokeOnlyAccessToken: boolean
    }) => {
        try {
            if (!user?.squareData?.tokens || !user?.metaData?.iv) {
                throw new Error('User data error')
            }
            const { accessToken } = decryptToken(user?.squareData?.tokens, user?.metaData?.iv)

            const properClientSecret = 'Client ' + process.env.APPLICATION_SECRET
            const oAuthApi = getOauthClient()
            const { result } = await oAuthApi.revokeToken({
                clientId: process.env.APP_ID,
                accessToken,
                revokeOnlyAccessToken
            }, properClientSecret)
            return result
        } catch (e) {
            console.error('error: ', e)
            throw new InternalServerError('Error deauthorizing token', 500)
        }
}

export const errorResponse = (res: NextApiResponse, err: any) => {
    switch(true) {
        case err instanceof BadRequestError:
            return res.status(err.statusCode).json({
                message: err.message
            })
        case err instanceof UnauthorizedError:
            return res.status(err.statusCode).json({
                message: err.message
            })
        case err instanceof ForbiddenError:
            return res.status(err.statusCode).json({
                message: err.message
            })
        case err instanceof NotFoundError:
            return res.status(err.statusCode).json({
                message: err.message
            })
        case err instanceof DatabaseError:
            return res.status(err.statusCode).json({
                message: err.message
            })
        case err instanceof InternalServerError:
            return res.status(err.statusCode).json({
                message: err.message
            })
        default:
            return res.status(500).json({
                message: 'Internal Server Error'
            })       
    }
}