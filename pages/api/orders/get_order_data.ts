import { NextApiResponse } from 'next'
import { decodeJWT, verifyJWT } from '../../../utils/helpers'
import { getUserClient } from '../../../utils/square-client'
import { decryptToken } from '../../../utils/server-helpers'
import { getUser } from '../../../lib/database'
import { NextApiUserRequest } from '../../../types'

(BigInt.prototype as any).toJSON = function () {
    return this.toString()
}
async function handler(req: NextApiUserRequest, res: NextApiResponse) {
    if (!verifyJWT(req)) {
        return res.status(403)
    }
    const id = decodeJWT(req)
    const user = await getUser(id)
    if (!user?.squareData?.tokens || !user?.metaData?.iv) {
        return res.status(500).json({ locations: [],
isTokenValid: false,
error: 'squareData or metaData is not a string' })
    }
    const { accessToken } = decryptToken(user?.squareData?.tokens, user?.metaData?.iv)
    const { ordersApi } = getUserClient(accessToken)
    const { result } = await ordersApi.searchOrders({
        locationIds: [
            req.body.id
        ],
        query: {
            filter: {
                stateFilter: {
                    states: [
                        'COMPLETED',
                        'OPEN'
                    ]
                },
            }
        }
    })
    return res.status(200).json(result)

}



export default handler