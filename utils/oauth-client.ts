import { Client, Environment } from 'square'
import { isString } from './helpers'

/**
 * This instance of the Square client is specifically for the OAuth flow.
 * We use this instance to get an access token and a refresh token for our application.
 * We instantiate this client in utils/oauth-client.ts
 */
export const getOauthClient = () => {
    if (!isString(process.env.ENVIRONMENT)) {
        console.error('ENVIRONMENT must be set in your .env')
        throw new Error('Server Error')
    }
    const {
        oAuthApi,
    } = new Client({
        environment: process.env.ENVIRONMENT ==='production' ? Environment.Production : Environment.Sandbox
    })
    return oAuthApi   
}
