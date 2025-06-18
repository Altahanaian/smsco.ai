import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // لا تعيد التوجيه للملفات الثابتة أو الصور أو API
  if (
    nextUrl.pathname.startsWith('/_next') ||
    nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  // إذا كان في المسار اللغة بالفعل (مثل /en أو /ar) لا تفعل شيء
  const pathname = nextUrl.pathname;
  if (pathname.startsWith('/en') || pathname.startsWith('/ar')) {
    return NextResponse.next();
  }

  // إعادة التوجيه بناءً على اللغة المفضلة للمتصفح
  const locale = request.headers.get('accept-language')?.startsWith('ar') ? 'ar' : 'en';
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
