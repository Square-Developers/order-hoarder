import { NextApiRequest, NextApiResponse } from 'next'
import { getAuthUrlValues } from '../../../utils/server-helpers'

async function handler(req:NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return getAuthUrl()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function getAuthUrl() {
        try {
            const data = await getAuthUrlValues()
            res.status(200).json(data)
        } catch(e) {
            console.error('error: ', e)
            res.status(400).json({ message: 'Error getting auth url'})
        }
    }
}

export default handler