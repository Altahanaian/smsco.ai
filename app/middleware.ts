import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // السماح بتمرير المسارات التي تحتوي على /en أو /ar أو ملفات مثل .css أو .js
  if (
    pathname.startsWith('/en') ||
    pathname.startsWith('/ar') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // تحديد اللغة المفضلة
  const acceptLang = request.headers.get('accept-language') || '';
  const locale = acceptLang.startsWith('ar') ? 'ar' : 'en';

  // إعادة التوجيه إلى المسار المناسب إذا لم يكن يحتوي على اللغة
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}
