import { NextRequest, NextResponse } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies'

import { publicRoutes } from './lib/constants'

export async function middleware(request: NextRequest) {
  const session = getSessionCookie(request)

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

  if (isPublicRoute) return NextResponse.next()

  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  if (session && isPublicRoute) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images/|icons/|brand/|videos/|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
