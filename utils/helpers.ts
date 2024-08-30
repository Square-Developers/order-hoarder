import { NextApiRequest } from 'next'
import { InternalServerError, NextApiUserRequest } from '../types'
import { verify } from '../middleware'
import { NumberFormatOptions } from 'intl'

// validate the users JWT
export const verifyJWT = async (req: NextApiUserRequest): Promise<boolean> => {
    if (!isString(process.env.JWT_SIGNING_SECRET)){
        console.error('JWT_SIGNING_SECRET is not set - check .env file')
        throw new InternalServerError('Server Error', 500)
    }
    const token = req?.cookies?.token

    if (token == undefined) return false
    try {
        await verify(token, process.env.JWT_SIGNING_SECRET)
        return true
    } catch (e) {
        return false
    }
}

// Read the user's id from the JWT
export const decodeJWT = (req: NextApiRequest): string => {
    try {
        const token = req?.cookies?.token
        if (token === undefined) return ''
        const jwt = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
        return jwt.sub
    } catch (e) {
        console.error(e)
        throw new InternalServerError('could not decode JWT', 500)
    }
}

/**
 * Helper function to format money into appropriate currency and rounding.
 * If the value is an integer (i.e. no decimal places), do not show `.00`.
 * @param {Number} value the amount
 * @param {String} currency the currency code
 */
export const formatMoney = function (value: bigint, currency: string) {
    let valueAsNumber = Number(value)
    // Create number formatter.
    const options: NumberFormatOptions = {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
    }
    // If the value is an integer, show no decimal digits.
    if (valueAsNumber % 1 == 0) {
        options.minimumFractionDigits = 0
    }

    // Some currencies don't need to use higher denominations to represent values.
    if (currency !== 'JPY') {
        valueAsNumber /= 100.0
    }
    const formatter = new Intl.NumberFormat('en-US', options)
    return formatter.format(valueAsNumber)
}

export function validateFormInput<T>(data: Record<string, T>): string[] {
    const missingData: string[] = [];
    
    for (const key in data) {
      if (!data[key]) {
        missingData.push(key);
      }
    }
    
    return missingData;
}

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}
