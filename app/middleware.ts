import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // تجاهل التوجيه إذا كان المسار يحتوي على لغة أو ملف (مثل صور، سكربتات، إلخ)
  if (pathname.startsWith('/en') || pathname.startsWith('/ar') || pathname.match(/\.[^\/]+$/)) {
    return NextResponse.next()
  }

  // تحديد اللغة بناءً على متصفح المستخدم
  const locale = request.headers.get('accept-language')?.startsWith('ar') ? 'ar' : 'en'

  // توجيه المستخدم مرة واحدة فقط إلى /ar أو /en
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}`
  return NextResponse.redirect(url)
}
