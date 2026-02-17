import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance and optimization options */
  compress: true,
  productionBrowserSourceMaps: false,
  
  /* Image optimization */
  images: {
    remotePatterns: [],
    unoptimized: false,
  },

  /* Headers for performance */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  /* Redirects for SEO */
  async redirects() {
    return [];
  },

  /* Rewrites */
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
