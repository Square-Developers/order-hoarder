import { NextApiResponse } from 'next'
import { NextApiUserRequest } from '../../../types'
import { getUser } from '../../../lib/database'
import { decodeJWT, verifyJWT } from '../../../utils/helpers'
import { AuthStatus } from '../../../types/user'


async function handler(req: NextApiUserRequest, res: NextApiResponse) {
    if (!verifyJWT(req)) {
        res.status(403)
    }
    const id = decodeJWT(req)
    const user = await getUser(id)
    const isAuthed = user?.squareData ? true : false
    const userDeniedSquare = user?.userDeniedSquare

    const authStatus: AuthStatus = {
        isAuthed,
        userDeniedSquare
    }
    res.status(200).json(authStatus)

}

export default handler