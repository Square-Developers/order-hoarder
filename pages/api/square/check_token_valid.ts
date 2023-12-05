import { NextApiResponse } from 'next'
import { NextApiUserRequest } from '../../../types'
import { getUser } from '../../../lib/database'
import { decodeJWT, isString, verifyJWT } from '../../../utils/helpers'
import { getOauthClient } from '../../../utils/square-client'
import { decryptToken } from '../../../utils/server-helpers'
(BigInt.prototype as any).toJSON = function () {
    return this.toString()
}

// This endpoint solely exists to the Frontend can check if the user's token is still valid
async function handler(req: NextApiUserRequest, res: NextApiResponse) {
    try {
        if (!verifyJWT(req)) {
            return res.status(403).json({ error: 'user has invalid JWT' })
        }
        const id = decodeJWT(req)
        const user = await getUser(id)
        if (!isString(user?.squareData?.tokens) || !isString(user?.metaData?.iv)) {
            return res.status(200).json({isValid: false})
        }

        const { accessToken } = decryptToken(user?.squareData?.tokens, user?.metaData?.iv)

        const oAuthApi = getOauthClient()

        // If this request fails, with 401, we know the token is invalid, and either expired or been revoked
        const { result } = await oAuthApi.retrieveTokenStatus(`Bearer ${accessToken}`);
        if (result.merchantId) {
            return res.status(200).json({ isValid: true })
        } else {
            return res.status(200).json({ isValid: false })
        }
    } catch (e: any) {
        if (e.statusCode === 401) {
            return res.status(200).json({ isValid: false })
        } else {
            console.error('error: ', e)
            return res.status(200).json({ isValid: false })
        }
    }
}

export default handler
