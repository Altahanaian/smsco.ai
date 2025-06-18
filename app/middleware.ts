import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // إذا كان المسار يبدأ بـ /en أو /ar أو ملف (مثل صورة أو JS أو CSS) لا تقم بأي إعادة توجيه
  if (pathname.startsWith('/en') || pathname.startsWith('/ar') || pathname.match(/\.[^\/]+$/)) {
    return NextResponse.next()
  }

  // تحديد اللغة بناءً على رأس المتصفح
  const locale = request.headers.get('accept-language')?.startsWith('ar') ? 'ar' : 'en'

  // توجيه المستخدم إلى المسار المناسب مرة واحدة فقط
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}`
  return NextResponse.redirect(url)
}
