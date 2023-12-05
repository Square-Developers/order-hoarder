import { NextApiResponse } from 'next'
import { NextApiUserRequest } from '../../../types'

export default function handler(req: NextApiUserRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return logout()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function logout() {
        res.setHeader('Set-Cookie', 'token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
        res.redirect('/')
    }
}