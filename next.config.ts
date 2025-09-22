import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {

  reactStrictMode: true, // ✅ Helps catch performance issues in dev
  swcMinify: true,       // ✅ Smaller, faster JS bundles

  experimental: {
    esmExternals: "loose", // ✅ Reduces polyfills/legacy JS
    cssChunking: true,     // Split + reorder CSS per route
    optimizeCss: true,     // Inline critical CSS (Critters)
    inlineCss: true        // Alternative inlining flag present in newer versions
  },


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

export default withBundleAnalyzer(nextConfig);

