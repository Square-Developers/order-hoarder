import { NextApiRequest, NextApiResponse } from 'next'
import { SquareData } from '../../../types'
import { isString } from '../../../utils/helpers'
import {getOauthClient} from '../../../utils/oauth-client'
import createClient from '../../../utils/supabase/api'
import { encryptToken } from '../../../utils/server-helpers'
import { SCOPES } from '../../../constants'
import createAdminClient from '../../../utils/supabase/admin'


// TODO: Confirm this method handles all potential error cases gracefully
export default async function handler(req: NextApiRequest, res: NextApiResponse<{ status: string } | { error: string } | Error[]>) {
    // Verify the state to protect against cross-site request forgery.
    if (req.cookies['square-state'] !== req.query['state']) {
        res.status(304).json({ error: 'CSRF failed' })
    } else if (req.query['error']) {
        // Check to see if the seller clicked the 'deny' button and handle it as a special case.
        if (('access_denied' === req.query['error']) && ('user_denied' === req.query['error_description'])) {
            const supabase = createClient(req, res)
            const {data: {user}} = await supabase.auth.getUser()
            if (!user) {
                throw new Error("user not found")
            }
            const adminSupabase = createAdminClient()
            const { error } = await adminSupabase.auth.admin.updateUserById(
                user.id,
                { app_metadata: {
                    squareData: {
                        userDeniedSquare: true
                    }
                } }
              )
            return res.redirect('/settings')
        }
        // Display the error and description for all other errors.
        else {
            return res.status(400).json({ error: `${req.query['error']}: ${req.query['error_description']}` })
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

            const tokens = JSON.stringify({accessToken, refreshToken})            
            const { iv, encrypted } = encryptToken(tokens)

            // NOTE: We will encrypt the access and refresh tokens before storing it. 
            const squareData: SquareData = {
                tokens: encrypted,
                expiresAt,
                merchantId,
                iv,
                scopes: SCOPES.join(','),
                userDeniedSquare: false
            }

            const supabase = createClient(req, res)
            const {data: {user}} = await supabase.auth.getUser()
            if (!user) {
                throw new Error("user not found")
            }
            const adminSupabase = createAdminClient()
            const { error } = await adminSupabase.auth.admin.updateUserById(
                user.id,
                { app_metadata: {
                    squareData
                } }
              )
              if (error) {
               console.log('failed to update user: ', error)
              }
            res.redirect('/dashboard')
        } catch (error) {
            // The response from the Obtain Token endpoint did not include an access token. Something went wrong.
            console.log('failed to get token', error)
        }
    } else {
        res.send({ status: 'bad request' })
    }
}