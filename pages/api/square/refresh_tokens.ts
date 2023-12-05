import { NextApiResponse } from 'next'
import { NextApiUserRequest, SquareData } from '../../../types'
import { getUser, updateRefreshTokens } from '../../../lib/database'
import { decodeJWT, isString, verifyJWT } from '../../../utils/helpers'
import { refreshTokens } from '../../../utils/server-helpers'

(BigInt.prototype as any).toJSON = function () {
    return this.toString()
}

async function handler(req: NextApiUserRequest, res: NextApiResponse) {
    if (!verifyJWT(req)) {
        return res.status(403)
    }
    const id = decodeJWT(req)
    const user = await getUser(id)
    if (!isString(user?.squareData?.tokens) || !isString(user?.metaData?.iv)) {
        return res.status(500).json({ locations: [],
isTokenValid: false,
error: 'squareData or metaData is not a string' })
    }
    if (!isString(process.env.APP_ID)) {
        return res.status(500).json({ error: 'APP_ID is not a string' })
    }
 
    try{
        await refreshTokens({
            id,
            tokens: user.squareData.tokens,
            iv: user.metaData.iv
        })
        res.status(200).json(({
            message: 'successfully refreshed tokens'
        }))

    } catch (error) {
        res.status(400).json(error)
    }
}

export default handler
