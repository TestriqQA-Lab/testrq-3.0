import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          // Explicitly allow contact page and assets
          '/contact-us',
          '/assets/',
          '/css/',
          '/js/',
          '/images/',
          '/_next/', // Next.js assets
          '/static/', // Static files
        ],
        disallow: [
          // Protect private and system paths
          '/private/',
          '/admin/',
          '/api/', // API routes (optional)
          
          // Reduce crawl noise from tracking params BUT exclude embed params
          '/*?*utm_*',
          '/*?*fbclid=*',
          '/*?*gclid=*',
          '/*?*msclkid=*',
          '/*?*_hsmi=*',
          '/*?*_hsenc=*',
          '/*?*mc_cid=*',
          '/*?*mc_eid=*',
          
          // Block print and share versions
          '/*?*print=*',
          '/*?*share=*',
          
          // Block search and filter params (optional)
          '/*?*search=*',
          '/*?*filter=*',
        ],
      },
    ],
    sitemap: 'https://www.testriq.com/sitemap.xml',
  };
}
