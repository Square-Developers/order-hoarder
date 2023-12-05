
import { NextApiRequest, NextApiResponse } from 'next'
import { RevokeTokenResponse } from 'square'
import { deauthorizeToken, errorResponse } from '../../../utils/server-helpers'
import { decodeJWT } from '../../../utils/helpers'
import { deleteSquareDataByMerchantId, getUser } from '../../../lib/database'

// TODO:Confirm all errors make sense
async function handler(req: NextApiRequest, res: NextApiResponse<RevokeTokenResponse>) {
    switch (req.method) {
        case 'POST':
            return deauthorize()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    async function deauthorize() {
        try{
            const id = decodeJWT(req)
            const user = await getUser(id)
            const revokeOnlyAccessToken = req?.body?.revokeToken ? true : false
            const result = await deauthorizeToken({user, revokeOnlyAccessToken})
            if (!revokeOnlyAccessToken) {
                await deleteSquareDataByMerchantId(user.squareData.merchantId)
            }

            return res.status(200).json(result)
        } catch (e) {
            return errorResponse(res, e)
        }
    }
}

export default handler