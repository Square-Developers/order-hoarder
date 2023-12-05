import { CreateUser, DBUser, DatabaseError, InternalServerError, MetaData, SquareData } from '../../types'
import { encryptToken } from '../../utils/server-helpers'
import { SCOPES } from '../../constants'
import prisma from '../prisma'
import { isString } from '../../utils/helpers'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

const handlePrismaError= (e: unknown) => {
    if (e instanceof PrismaClientKnownRequestError) {
        // Handle known Prisma client request errors
        console.error('Prisma request error:', e.message)
        throw new DatabaseError('Database request error', 503)
    } else {
        // Unknown error
        console.error('Unknown error:', e)
        throw new InternalServerError('Unknown database error', 500)
    }
}

/**
 * @params user
 * @description Create a marketplace user
 */
export const createUser = async ({ username, password, firstName, lastName, salt, avatar }: CreateUser) => {
    try {
        return await prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
                salt,
                avatar
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @description Create a marketplace user
 */
export const updateUser = async ({ id, user }: {id: string, user: DBUser}) => {
    try {
        return await prisma.user.update({
            where: {
                id
            },
            data: {
                ...user
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id
 * @description Get a marketplace user
 */
export const getUser = async (id: string) => {
    try {
        return await prisma.user.findUnique({
            where: {
                id
            },
            include: {
                squareData: true,
                metaData: true
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id
 * @description Get a marketplace user by username
 */
export const getUserByUsername = async (username: string) => {
    try {
        return await prisma.user.findUnique({
            where: {
                username
            },
        })
    } catch (e) {
        handlePrismaError(e)
    }
}


/**
 * @description Get a marketplace users
 */
export const getUsers = async ({ username, password }: { username: string; password: string }) => {
    try {
        return await prisma.user.findMany({
            where: {
                AND: [
                    {
                        username: {
                            equals: username
                        },
                    },
                    {
                        password: {
                            equals: password
                        }
                    }
                ]
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}


/**
 * @params id
 * @description Get Square data for a user
*/
export const getSquareData = async (id: string) => {
    try {
        return await prisma.squareData.findUnique({
            where: {
                userId: id
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }   
}

/**
 * @description Get all User data from the DB
*/
export const getAllUserData = async () => {
    try {
        return await prisma.user.findMany({
            include: {
                squareData: true,
                metaData: true
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }   
}

/**
 * @description Get Square data for all users
*/
export const getAllSquareData = async () => {
    try {
        return await prisma.squareData.findMany()
    } catch (e) {
        handlePrismaError(e)
    }   
}

/**
 * @params merchantId
 * @description Get Square data for all users with a given merchantId
*/
export const getSquareDataByMerchantId = async (merchantId: string) => {
    try{
        return await prisma.squareData.findMany({
            where: {
                merchantId
            }
        })
    } catch(e) {
        handlePrismaError(e)
        return []
    }
}

/**
 * @params id, squareData
 * @description create Square data
 */
export const createSquareData = async ({ id, squareData }: {id: string, squareData: SquareData}) => {
    try {
        return await prisma.squareData.create({
            data: {
                tokens: squareData.tokens,
                expiresAt: squareData.expiresAt,
                merchantId: squareData.merchantId,
                userId: id
            }
        })
    } catch(e) {
        handlePrismaError(e)
    }
}

/**
 * @params id
 * @description create Square data
 */
export const updateSquareData = async ({ id, squareData }: {id: string, squareData: SquareData}) => {
    try {
        return await prisma.squareData.update({
            where: { userId: id },
            data: { ...squareData }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id
 * @description delete Square data
 */
export const deleteSquareData = async ({ id }: {id: string}) => {
    try{
        return await prisma.squareData.delete({
            where: {
                userId: id
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id
 * @description get meta data for user
 */
export const getMetaData = async (id: string) => {
    try {
        return await prisma.metaData.findUnique({
            where: {
                userId: id
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id, metaData
 * @description create meta data for user
 */
export const createMetaData = async ({ id, metaData }: {id: string, metaData: MetaData}) => {
    try {
        return await prisma.metaData.create({
            data: {
                userId: id,
                ...metaData
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id, metaData
 * @description update meta data for user
 */
export const updateMetaData = async ({ id, metaData }: {id: string, metaData: MetaData}) => {
    try {
        return await prisma.metaData.update({
            where: {
                userId: id
            },
            data: { ...metaData }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id
 * @description delete Metadata
 */
export const deleteMetaData = async ({ id }: {id: string}) => {
    try {
        return await prisma.metaData.delete({
            where: {
                userId: id
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id, squareData
 * @description Authorize a user
 */
export const authorizeUser = async ({ id, squareData }: {id: string, squareData: SquareData}) => {
    // Encrypt the tokens on squareData before writing them to the DB
    if (!isString(squareData.tokens)) {
        throw new Error('Tokens must be a string')
    }
    const { iv, encrypted } = encryptToken(squareData.tokens)
    squareData.tokens = encrypted

    // Save Users Square Data
    await createSquareData({
        id,
        squareData
    })

    // Save Users MetaData
    await createMetaData({
        id,
        metaData: {
            iv,
            scopes: SCOPES.join(','),
        }
    })
}

/**
 * @params merchantId 
 * @description Delete all square data associated with a merchant
 * This does not delete the user from OrderHoarder
 */
export const deleteSquareDataByMerchantId = async (merchantId: string) => {
    // Get all the users in our DB that are associated with this merchant
    const squareData:SquareData[] = await getSquareDataByMerchantId(merchantId)

    // For each of those users, delete their Square data and their Metadata
    squareData.forEach(async (data) => {
        if (data?.userId) {
            await deleteSquareData({
                id: data.userId
            })
            await deleteMetaData({
                id: data.userId
            })
        }
    })
}

export const deleteUserDataById = async (id: string) => {
    try {
        await prisma.user.delete({
            where: {
                id
            }
        })
    } catch (e) {
        handlePrismaError(e)
    }
}

/**
 * @params id, squareData
 * @description Update the refresh tokens for a user
 */
export const updateRefreshTokens = async ({ id, squareData }: {id: string, squareData: SquareData}) => {
    // Encrypt the new tokens
    if (!isString(squareData.tokens)) {
        throw new Error('Tokens must be a string')
    }
    const { encrypted, iv } = encryptToken(squareData.tokens)

    //update squareData.tokens to have the encrypted tokens
    squareData.tokens = encrypted

    await updateSquareData({
        id,
        squareData
    })

    await updateMetaData({
        id,
        metaData: {
            iv,
            squareTokenLastUpdated: new Date().toISOString()
        }
    })

    return await getUser(id)
}
