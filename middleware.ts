import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const authOnlyRoutes = [
  '/dashboard',
  '/tarefas',
  '/tasks',
  '/metricas',
  '/metrics',
  '/skus',
  '/videos',
  '/atividades',
  '/activities',
  '/relatorios',
  '/reports',
  '/usuarios',
  '/users',
];

const adminRoutes = ['/usuarios', '/users'];

function isProtectedPath(pathname: string) {
  return authOnlyRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

function isAdminPath(pathname: string) {
  return adminRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthenticated = Boolean(token?.userId);

  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (isProtectedPath(pathname) && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminPath(pathname) && token?.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/tarefas/:path*',
    '/tasks/:path*',
    '/metricas/:path*',
    '/metrics/:path*',
    '/skus/:path*',
    '/videos/:path*',
    '/atividades/:path*',
    '/activities/:path*',
    '/relatorios/:path*',
    '/reports/:path*',
    '/usuarios/:path*',
    '/users/:path*',
    '/login',
  ],
};
