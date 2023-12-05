import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../../utils/cookies'
import { getUserByUsername, createUser } from '../../../lib/database'
import { createJWT, errorResponse, hashPassword } from '../../../utils/server-helpers'
import Crypto from 'crypto'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            return signup()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function signup() {
        const { username, password, firstName, lastName } = req.body
        try {
            let user = await getUserByUsername(username)
            if (user?.username) {
                return res.status(409).json({ message: 'User already exists' })
            }
            const { hash, salt } = await hashPassword(password)
            const newUser = await createUser({
                username,
                password: hash,
                firstName,
                lastName,
                salt,
                avatar: Crypto.createHash('md5').update(username).digest('hex')
            })

            // create a jwt token that is valid for 7 days
            const token = await createJWT({ sub: newUser.id })
            // return basic user details and token
            
            setCookie(res, 'token', token)
            // return basic user details and token
            return res.status(200).json({
                id: newUser.id,
                username: newUser.username,
                token
            })
        } catch (e) {
            console.error(e)
            return errorResponse(res, e)
        }
    }
}