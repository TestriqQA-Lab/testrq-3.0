import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.testriq.com', // Corrected: only hostname, no protocol or trailing slash
        port: '',
        pathname: '/wp-content/uploads/**', // Corrected: specific path for WordPress uploads
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/our-clients',
        destination: '/case-studies', // Ise sahi naye URL se badal lein
        permanent: true, // Yeh 301 redirect set karta hai
      },
      {
        source: '/contact',
        destination: '/contact-us', // Ise apne naye contact page ke URL se badal lein
        permanent: true,
      },
    ]
  },

};

export default nextConfig;
