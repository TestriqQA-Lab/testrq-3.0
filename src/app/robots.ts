import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/', '/llms.txt'],
    },
    sitemap: 'https://www.testriq.com/sitemap.xml',
  };
}
