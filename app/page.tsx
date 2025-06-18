import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const acceptLang = headersList.get('accept-language') || '';
  const preferredLocale = acceptLang.startsWith('ar') ? 'ar' : 'en';

  redirect(`/${preferredLocale}`);
}
