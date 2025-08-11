import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';

const publicPaths = [
  '/',
  '/auth/signin',
  '/auth/error',
  '/_next',
  '/favicon.ico'
];

const middleware = withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;

    // Allow access to public paths
    if (publicPaths.some(path => pathname === path || pathname.startsWith(`${path}/`))) {
      return NextResponse.next();
    }

    // For API routes, return 401 if not authenticated
    if (pathname.startsWith('/api')) {
      return NextResponse.next();
    }

    // For protected routes, redirect to sign in if not authenticated
    const token = req.nextauth.token;
    if (!token) {
      const signInUrl = new URL('/auth/signin', req.url);
      signInUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // If there's a token, the user is authenticated
        return !!token;
      },
    },
  }
);

// Export the middleware function as default
export default middleware;

// Configure which routes to protect
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};