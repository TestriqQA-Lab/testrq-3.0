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
          '/_next/',   // build assets
          '/static/',  // only if you truly expose this

          // Optional: block API endpoints if they’re not meant for indexing.
          // If some API endpoints serve public HTML or docs you want indexed, remove this.
          // '/api/',

          // Reduce crawl noise from tracking params (canonical should still point to clean URL)
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

      // IMPORTANT: Do NOT block AI crawlers.
      // Leave out disallow rules for: GPTBot, anthropic-ai, PerplexityBot, Google-Extended, Amazonbot, Applebot-Extended, etc.
      // These agents will fall under the global allow above.
    ],
    sitemap: 'https://testriq.com/sitemap.xml',
    // host is non-standard and not needed
  };
}
