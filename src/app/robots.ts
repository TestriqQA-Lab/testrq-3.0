import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Protect private and system paths
          '/private/',
          '/admin/',
          // Reduce crawl noise from tracking params
          '/*?*utm_*',
          '/*?*fbclid=*',
          '/*?*gclid=*',
          '/*?*msclkid=*',
          '/*?*_hsmi=*',
          '/*?*_hsenc=*',
          '/*?*mc_cid=*',
          '/*?*mc_eid=*',
        ],
      },
    ],
    sitemap: 'https://www.testriq.com/sitemap.xml',
  };
}
