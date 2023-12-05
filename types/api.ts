import { NextApiRequest } from 'next'
import { MetaData, SquareData } from './user'

export interface NextApiUserRequest extends NextApiRequest {
    user: { username: string }
}

export interface RefreshTokenResponse {
    squareData: SquareData
    metaData: MetaData
    message: string
}