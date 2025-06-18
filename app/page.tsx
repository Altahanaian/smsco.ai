// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/en'); // أو استخدم redirect('/ar') كخيار افتراضي
}
