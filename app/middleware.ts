import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ السماح بالمسارات التي تبدأ بلغة، أو مسارات النظام
  if (
    pathname.startsWith('/en') ||
    pathname.startsWith('/ar') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // ✅ تحديد اللغة من الهيدر
  const acceptLang = request.headers.get('accept-language') || '';
  const locale = acceptLang.startsWith('ar') ? 'ar' : 'en';

  // ✅ إعادة التوجيه مرة واحدة فقط للمسار المطلوب
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}
