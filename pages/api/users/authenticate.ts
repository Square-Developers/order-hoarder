import { NextApiResponse } from 'next'
import { NextApiUserRequest } from '../../../types'
import { setCookie } from '../../../utils/cookies'
import { createJWT, errorResponse, isPasswordCorrect } from '../../../utils/server-helpers'
import { getUserByUsername } from '../../../lib/database'


export default function handler(req: NextApiUserRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            return authenticate()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function authenticate() {
        try {
            const { username, password } = req.body
            const user = await getUserByUsername(username)
            if (!isPasswordCorrect(user?.password || '', user?.salt || '', password)) {
                return res.status(404).json({ message: 'username or password is incorrect' })
            }

            const token = await createJWT({ sub: user?.id })
            // return basic user details and token
            setCookie(res, 'token', token)
            return res.status(200).json({})
        } catch (e) {
            return errorResponse(res, e)
        }
    }
}