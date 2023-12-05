import { NextApiResponse } from 'next'
import { NextApiUserRequest } from '../../../types'
import { getUser } from '../../../lib/database'
import { decodeJWT, isString, verifyJWT } from '../../../utils/helpers'
import { getUserClient } from '../../../utils/square-client'
import { decryptToken } from '../../../utils/server-helpers'

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
    const { accessToken } = decryptToken(user?.squareData?.tokens, user?.metaData?.iv)
    const { merchantsApi } = getUserClient(accessToken)
    const { result } = await merchantsApi.listMerchants()
    return res.status(200).json(result)
}

export default handler