import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production';

  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/', '/_next/image'],
      disallow: ['/private/', '/admin/', '/api/', '/_next/'],
    },
    sitemap: 'https://www.testriq.com/sitemap.xml',
  };
}
