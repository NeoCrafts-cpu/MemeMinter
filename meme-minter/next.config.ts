import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Image configuration for DALL-E generated images
   * 
   * DALL-E returns temporary URLs from OpenAI's CDN.
   * We need to allow these domains in Next.js Image component.
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dalleprodsec.blob.core.windows.net",
        pathname: "/**",
      },
    ],
  },
  
  /**
   * Turbopack configuration (Next.js 16+ default bundler)
   * Empty config to acknowledge we're using Turbopack
   */
  turbopack: {},
};

export default nextConfig;
