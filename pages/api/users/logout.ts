import { NextApiResponse } from 'next'
import { NextApiUserRequest } from '../../../types'
import createClient from '../../../utils/supabase/api'

export default function handler(req: NextApiUserRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return logout()
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function logout() {
        const supabase = createClient(req, res)
        const { error } = await supabase.auth.signOut()
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        res.redirect('/')
    }
}