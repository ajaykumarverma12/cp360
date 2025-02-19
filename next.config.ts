import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: "en", // Default language
    locales: ["en", "fr", "de", "es"], // Supported languages
  },
};

export default nextConfig;
