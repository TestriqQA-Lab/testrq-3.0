/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: 
'/software-qa-testing-services-in-:city',
        destination: 
'/:city',
      },
    ];
  },
};
module.exports = nextConfig;


