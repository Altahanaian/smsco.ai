import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/ar'); // يمكنك تغييره إلى '/en' إذا أردت أن تكون اللغة الافتراضية إنجليزية
}
