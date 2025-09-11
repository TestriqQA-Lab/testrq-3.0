import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable all Next.js/Vercel image optimization globally
    unoptimized: true, // images will be served as-is, no optimizer requests [1][13]
    // Keep remotePatterns if still using <Image> with external sources (safe to keep)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "cms.testriq.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/our-clients",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
