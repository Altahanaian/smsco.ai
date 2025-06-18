export const metadata = {
  title: "SMSCO | سمسكو",
  description: "منصة استشارات وتدريب مدعومة بالذكاء الاصطناعي",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}