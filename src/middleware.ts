import { NextRequest, NextResponse } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies'

import { publicRoutes } from './lib/constants'

export async function middleware(request: NextRequest) {
  const session = getSessionCookie(request)

  const isAuthRoute = publicRoutes.includes(request.nextUrl.pathname)

  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  if (!session && !isAuthRoute) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images/|icons/|brand/|videos/|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
