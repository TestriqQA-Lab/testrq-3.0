import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/'],
      disallow: ['/private/', '/admin/', '/api/', '/_next/'],
    },
    sitemap: 'https://www.testriq.com/sitemap.xml',
  };
}
