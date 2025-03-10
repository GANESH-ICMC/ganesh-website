import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

// Create middleware functions for each feature.
const { auth } = NextAuth(authConfig)
const intlMiddleware = createIntlMiddleware(routing);

export default auth(async function middleware(request: any) {
  // Your custom middleware logic goes here
  const { pathname } = request.nextUrl;

  const isAuthenticated = !!request.auth
  if (pathname.startsWith('/br/admin') && !isAuthenticated) {
    return;
  }

  // Bypass middleware for static assets like images
  if (pathname.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
    return NextResponse.next();
  }

  const intlResponse = intlMiddleware(request);
  if (intlResponse) {
    return intlResponse;
  }

  return NextResponse.next();
})

// Merge the matcher configurations from both middlewares.
// Adjust the matcher array as needed so that it covers both cases.
export const config = {
  matcher: [
    // For auth: ignore api routes, Next.js internals and static assets
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)',
    // For internationalized paths
    '/',
    '/(en|br)/:path*',
  ],
};
