import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during builds (useful for demo deploys)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: ignore TypeScript build errors too
    // (only do this for quick demos, not production)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;