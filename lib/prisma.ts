import { PrismaClient as PrismaClientSqlite } from '../prisma/generated/sqlite'
import { PrismaClient as PrismaClientPostgresql } from '../prisma/generated/postgresql'
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient = process.env.ENVIRONMENT === 'production' ?
 new PrismaClientPostgresql() : new PrismaClientSqlite()

export default prisma