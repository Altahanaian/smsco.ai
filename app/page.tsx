import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || 'en';
  const preferredLang = acceptLanguage.startsWith('ar') ? 'ar' : 'en';

  redirect(`/${preferredLang}`);
}
