import { NextApiRequest, NextApiResponse } from 'next'
import createClient from '../../../utils/supabase/api'
import Crypto from 'crypto'
import { errorResponse } from '../../../utils/server-helpers'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            return signup()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function signup() {
        const { username, password, firstName, lastName } = req.body
        const supabase = await createClient(req, res)
        try {
            const { data, error } = await supabase.auth.signUp({
                email: username,
                password: password,
                options: {
                data: {
                  first_name: firstName,
                  last_name: lastName,
                  avatar: Crypto.createHash('md5').update(username).digest('hex')
                }
              }
              })
            // return basic user details and token
            if (!error) { 
                return res.status(200).json({
                    data,
                })
            } else {
                return res.status(error?.status || 400).json({ message: error.code })
            }
        } catch (e) {
            console.error(e)
            return errorResponse(res, e)
        }
    }
}