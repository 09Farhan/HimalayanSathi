import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect /admin routes (except login)
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.includes('/login')) {
    const session = request.cookies.get('hs_admin_session');
    
    // If no valid session cookie, redirect to login
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
