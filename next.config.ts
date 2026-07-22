import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local images from public/ directory
  images: {
    // In production, add your CDN domain here
  },
  // Optimized production output
  poweredByHeader: false,
};

export default nextConfig;
