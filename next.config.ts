import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep builds lenient during development / demo deploys
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },


  // Static export for PHP hosting
  output: "export",
  trailingSlash: true,

  // Allow local SVGs and use unoptimized images so we don't need the Next.js image optimizer on the server
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    // Applied to SVG responses only
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Make /admin resolve the static Decap CMS page
  async rewrites() {
    return [
      { source: "/admin", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
