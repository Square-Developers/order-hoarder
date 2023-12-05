
import { NextApiRequest, NextApiResponse } from 'next'
import { deleteSquareDataByMerchantId } from '../../../lib/database'
import { WebhooksHelper } from 'square'
import { isString } from '../../../utils/helpers'

const isFromSquare = (body: string, signature: string):boolean => {
    if (!isString(process.env.SIGNATURE_KEY) || !isString(process.env.APP_URL)) {
        throw new Error('SIGNATURE_KEY or APP_URL is not a string')
    }
    return WebhooksHelper.isValidWebhookEventSignature(
        body,
        signature,
        process.env.SIGNATURE_KEY,
        process.env.APP_URL 
      )
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!isString(req.headers['x-square-hmacsha256-signature'])) {
        return res.status(403)
    }

    // validate that the request is from square
    if (!isFromSquare(
        JSON.stringify(req.body),
        req.headers['x-square-hmacsha256-signature'])
    ) {
        res.status(403)
    } else {
        const { merchant_id } = req.body
        await deleteSquareDataByMerchantId(merchant_id)
        res.status(200)
    }
}

export default handler