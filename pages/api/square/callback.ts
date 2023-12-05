import { NextApiRequest, NextApiResponse } from 'next'
import { Error } from 'square'
import { SquareData } from '../../../types'
import { authorizeUser, getUser, updateUser } from '../../../lib/database'
import { decodeJWT, isString } from '../../../utils/helpers'
import {getOauthClient} from '../../../utils/oauth-client'

// TODO: Confirm this method handles all potential error cases gracefully
export default async function handler(req: NextApiRequest, res: NextApiResponse<{ status: string } | { error: string } | Error[]>) {
    // Verify the state to protect against cross-site request forgery.
    if (req.cookies['square-state'] !== req.query['state']) {
        res.status(304).json({ error: 'CSRF failed' })
    } else if (req.query['error']) {
        // Check to see if the seller clicked the 'deny' button and handle it as a special case.
        if (('access_denied' === req.query['error']) && ('user_denied' === req.query['error_description'])) {
            const id = await decodeJWT(req)
            const user = await getUser(id)
            if (user) {
                await updateUser({
                    id,
                    user: {
                        ...user,
                        userDeniedSquare: true
                    }
                })
            }
            res.redirect('/settings')
        }
        // Display the error and description for all other errors.
        else {
            res.status(400).json({ error: `${req.query['error']}: ${req.query['error_description']}` })
        }
    }
    // When the response_type is "code", the seller clicked Allow
    // and the authorization page returned the auth tokens.
    else if ('code' === req.query['response_type']) {
        // Extract the returned authorization code from the URL
        const { code } = req.query

        try {
            // API call to ObtainToken - https://developer.squareup.com/reference/square/oauth-api/obtain-token
            if (!isString(code)) {
                throw new Error('code is not a string')
            }
            if (!isString(process.env.APP_ID)) {
                throw new Error('APP_ID is not a string')
            }
            const oAuthApi = getOauthClient()
            const { result } = await oAuthApi.obtainToken({
                // Provide the code in a request to the Obtain Token endpoint
                code: code,
                clientId: process.env.APP_ID,
                grantType: 'authorization_code',
                codeVerifier: req.cookies['square-code-verifier']
            })

            // Extract the returned access token from the ObtainTokenResponse object
            const {
                accessToken,
                refreshToken,
                expiresAt,
                merchantId
            } = result

            // Prepare the data to be written to the database
            // NOTE: We will encrypt the access and refresh tokens before storing it. 
            const squareData: SquareData = {
                tokens: JSON.stringify({
                    accessToken,
                    refreshToken
                }),
                expiresAt,
                merchantId
            }
            // grab the user id from the JWT
            const id = await decodeJWT(req)
            // update user object to reflect that they have authorized Square
            const user = await getUser(id)
            if (user?.userDeniedSquare) {
                await updateUser({
                    id,
                    user: {
                        ...user,
                        userDeniedSquare: false
                    }
                })
            }
            // Update the database with the authorized Square data
            await authorizeUser({
                id,
                squareData
            })

            res.redirect('/dashboard')
        } catch (error) {
            // The response from the Obtain Token endpoint did not include an access token. Something went wrong.
            console.log('failed to get token', error)
        }
    } else {
        res.send({ status: 'bad request' })
    }
}