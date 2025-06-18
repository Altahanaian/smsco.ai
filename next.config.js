/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
    localeDetection: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24, // 1 يوم
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.smsco.ai',
      },
    ],
  },
};

module.exports = nextConfig;
