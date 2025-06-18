import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // السماح بتمرير الطلب إذا كان يحتوي بالفعل على اللغة أو ملف ثابت
  if (
    pathname.startsWith('/en') ||
    pathname.startsWith('/ar') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // تحديد اللغة من الهيدر
  const acceptLang = request.headers.get('accept-language') || '';
  const locale = acceptLang.startsWith('ar') ? 'ar' : 'en';

  // إعادة التوجيه فقط إذا لم يكن الطلب يحتوي مسبقًا على لغة
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
