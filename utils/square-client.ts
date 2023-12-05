import { Client, Environment } from 'square'
import { isString } from './helpers'

/**
 * This instance of the Square client is specifically for the OAuth flow.
 * We use this instance to get an access token and a refresh token for our application.
 * When we make calls to square on behalf of an authorized user, we use getUserClienta
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

/**
 * This instance of the Square client is specifically for making calls to Square after
 * we have authorized a user, and we have an access token for them.
 */
export const getUserClient = (accessToken: string) => {
    const { locationsApi, merchantsApi, oAuthApi, ordersApi } = new Client({
        accessToken,
        environment: process.env.ENVIRONMENT === 'production' ? Environment.Production : Environment.Sandbox
    })
    return {
        locationsApi,
        merchantsApi,
        oAuthApi,
        ordersApi,
    }
}

