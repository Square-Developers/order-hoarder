import { NextApiResponse } from 'next'
import { BasicUserData } from '../../../types'
import { decodeJWT, verifyJWT } from '../../../utils/helpers'
import { NextApiUserRequest } from '../../../types'
import { getUser } from '../../../lib/database'

async function handler(req: NextApiUserRequest, res: NextApiResponse<BasicUserData>) {
    switch (req.method) {
        case 'GET':
            return authenticate()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function authenticate() {

        if (await verifyJWT(req)) {
            const user = await getUser(decodeJWT(req))
            res.json({
                username: user?.username || '',
                firstName: user?.firstName || '',
                lastName: user?.lastName || '',
                avatar: user?.avatar || ''
            })
        } else {
            res.json({
                username: '',
                firstName: '',
                lastName: '',
                avatar: ''
            })
        }
    }
}

export default handler