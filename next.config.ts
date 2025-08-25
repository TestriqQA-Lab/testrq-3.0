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
};

export default nextConfig;
