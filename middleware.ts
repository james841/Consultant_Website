import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.ADMIN_SECRET_KEY!);

export async function middleware(req: NextRequest) {
  const isAdminRoute =
    req.nextUrl.pathname.startsWith('/admin') &&
    !req.nextUrl.pathname.includes('/login');

  if (!isAdminRoute) return NextResponse.next();

  const token = req.cookies.get('admin_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    await jwtVerify(token, SECRET);
    return NextResponse.next();
  } catch {
    // Token invalid or expired
    const response = NextResponse.redirect(new URL('/admin/login', req.url));
    response.cookies.delete('admin_token');
    return response;
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};