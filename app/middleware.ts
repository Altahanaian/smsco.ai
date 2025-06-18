import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // السماح بالوصول المباشر للغات أو ملفات معينة
  if (pathname.startsWith('/en') || pathname.startsWith('/ar') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const locale = request.headers.get('accept-language')?.startsWith('ar') ? 'ar' : 'en'
  return NextResponse.redirect(new URL(`/${locale}`, request.url))
}
