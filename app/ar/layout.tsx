import React from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
