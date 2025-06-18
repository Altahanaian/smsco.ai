/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false, // ✅ لاحظ هنا: false وليس true
  },
};

module.exports = nextConfig;
