
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
    try{
        if (!isString(req.headers['x-square-hmacsha256-signature'])) {
            return res.status(403).json({ error: 'hmacsha256 signature missing' })
        }
        // validate that the request is from square
        if (!isFromSquare(
            JSON.stringify(req.body),
            req.headers['x-square-hmacsha256-signature'])
        ) {
            return res.status(403).json({ error: 'Invalid signature' })
        } else {
            const { merchant_id } = req.body
            await deleteSquareDataByMerchantId(merchant_id)
            return res.status(200).json({ message: 'success' })
        }
    } catch(e) {
        console.error(e)
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export default handler