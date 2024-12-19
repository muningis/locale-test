import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["fr", "lt"],
    defaultLocale: "lt",
    localeDetection: false,
  },
};

export default nextConfig;
