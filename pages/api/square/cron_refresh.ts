import { NextApiRequest, NextApiResponse } from 'next'
import { getAllSquareData, getMetaData } from '../../../lib/database'
import { SquareData } from '../../../types'
import { isString } from '../../../utils/helpers'
import { refreshTokens } from '../../../utils/server-helpers'

// This endpoint exists for our cron job to be able to refresh tokens. This is part of a required refresh strategy
// for the Square App Marketplace

async function handler(req:NextApiRequest, res: NextApiResponse) {
    const NOW = Date.now()
    const TWENTY_FOUR_DAYS = 2073600000
    try {
        if (process.env.CRON_ACCESS_TOKEN !== req.headers.authorization) {
            console.error('Missing or incorrect Cron Access Token')
            return res.status(401).json({message: 'unauthorized'})
        }

        // Query all Square Data in the DB
        const squareData = await getAllSquareData()
        const transformedData = await Promise.all(squareData.map(async (data:SquareData) => {
            if (isString(data.expiresAt) && new Date(data.expiresAt).getTime() - TWENTY_FOUR_DAYS < NOW) {
                if (isString(data.userId)) {
                    const { iv } = await getMetaData(data.userId);
                    if (isString(iv)) {
                        // Return the transformed object for this iteration
                        return { ...data, iv };
                    }
                }
            }
            // Return null (or some default value) if the condition is not met
            return null;
        }));
        
        // Filter out null values
        const expiredTokens = transformedData.filter(item => item !== null);
        // Promise and loop through thing to query the refresh token square endpoint
        await Promise.all(expiredTokens.map( async (data) => {
            try{
                await refreshTokens({
                    id: data.userId,
                    tokens: data.tokens,
                    iv: data.iv
                })
        } catch(e) {
            console.error('error: ', e)
        }
        }))
    } catch (e) {
        console.error('error: ', e)
    }

    return res.status(200).json({message: 'success'})
}

export default handler