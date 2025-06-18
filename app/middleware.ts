import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // السماح بالمسارات التي تبدأ بـ /ar أو /en أو ملفات النظام
  if (
    pathname.startsWith('/ar') ||
    pathname.startsWith('/en') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // تحديد اللغة المفضلة
  const acceptLang = request.headers.get('accept-language') || '';
  const locale = acceptLang.startsWith('ar') ? 'ar' : 'en';

  // إعداد إعادة التوجيه
  const url = request.nextUrl;
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}
