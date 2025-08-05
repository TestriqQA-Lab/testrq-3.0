import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/static/',
          '*.json$',
          '/*?*utm_*',
          '/*?*ref=*',
          '/*?*fbclid=*'
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      }
    ],
    sitemap: 'https://testrq-3-0.vercel.app/sitemap.xml',
    host: 'https://testrq-3-0.vercel.app',
  };
}

