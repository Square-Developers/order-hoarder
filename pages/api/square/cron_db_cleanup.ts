// This method will check for User accounts that are older than 1 week, deauthorize them, and delete their data.
// This is to just keep the database clean and not have a bunch of old data in there. This is not a requirement for the App Marketplace

import { NextApiRequest, NextApiResponse } from 'next'
import { deleteUserDataById, getAllUserData} from '../../../lib/database'
import { deauthorizeToken } from '../../../utils/server-helpers'
import { DBUser } from '../../../types'

async function handler(req:NextApiRequest, res: NextApiResponse) {
    const NOW = Date.now()
    const ONE_WEEK = 604800000
    try {
        if (process.env.CRON_ACCESS_TOKEN !== req.headers.authorization) {
            console.error('Missing or incorrect Cron Access Token')
            return res.status(401).json({message: 'unauthorized'})
        }
        const data = await getAllUserData()
        res.status(200).json({message: 'success'})
        const transformedData = await Promise.all(data.map(async (user: DBUser) => {
            if (new Date(user.createdAt).getTime() + ONE_WEEK < NOW) {
                return user
            }
            // Return null (or some default value) if the condition is not met
            return null;
        }));
        const expiredUsers = transformedData.filter(item => item !== null);
        await Promise.all(expiredUsers.map( async (data) => {
            if (data.squareData !== null) {
                await deauthorizeToken({
                    user: data,
                    revokeOnlyAccessToken: false
                })
            }
            await deleteUserDataById(data.id)
        }))
    } catch (e) {
        console.error('error: ', e)
    }

}

export default handler
