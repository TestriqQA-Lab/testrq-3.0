import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/', '/_next/image/'],
      disallow: ['/private/', '/admin/', '/api/', '/_next/'],
    },
    sitemap: 'https://www.testriq.com/sitemap.xml',
  };
}
