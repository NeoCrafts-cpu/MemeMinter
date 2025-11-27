import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Image configuration for avatar/logo generation
   * Using DiceBear API for free unlimited avatar generation
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
    ],
  },
  
  /**
   * Turbopack configuration (Next.js 16+ default bundler)
   */
  turbopack: {},
};

export default nextConfig;
