import { NextResponse, NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const secret = process.env.JWT_SIGNING_SECRET || ''

export async function verify(token: string, secret: string) {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret))
    return payload
}

export default async function middleware(req: NextRequest) {
    const jwt = req.cookies.get('token')
    if (req.nextUrl.pathname === '/') {
        if (jwt === undefined) {
            return NextResponse.next()
        } else {
            try {
                await verify(jwt, secret)
                req.nextUrl.pathname = '/dashboard'
                return NextResponse.redirect(req.nextUrl)
            } catch (error) {
                req.nextUrl.pathname = '/login'
                return NextResponse.redirect(req.nextUrl)
            }
        }
    } else {
        if (jwt === undefined) {
            req.nextUrl.pathname = '/login'
            return NextResponse.redirect(req.nextUrl)
        }

        try {
            await verify(jwt, secret)
            return NextResponse.next()
        } catch (error) {
            console.log('middleware error: ', error)
            req.nextUrl.pathname = '/login'
            return NextResponse.redirect(req.nextUrl)
        }
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/reports/:path*',
        '/orders/:path*',
        '/customers/:path*',
        '/billing/:path*',
        '/settings/:path*',
        '/'
    ],
}

