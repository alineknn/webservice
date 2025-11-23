import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep builds lenient during development / demo deploys
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Enable built‑in i18n so router.locale works; default Russian
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    localeDetection: false,
  },

  // Allow local SVGs to be used with next/image safely
  images: {
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
