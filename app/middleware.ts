import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // إذا كان المستخدم يطلب صفحة تبدأ بـ /en أو /ar أو ملف (مثل .css أو .png)
  if (
    pathname.startsWith('/en') ||
    pathname.startsWith('/ar') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // استخراج اللغة من الهيدر
  const acceptLang = request.headers.get('accept-language') || '';
  const locale = acceptLang.startsWith('ar') ? 'ar' : 'en';

  // إعادة التوجيه فقط إذا لم يكن المستخدم في المسار الصحيح
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}
