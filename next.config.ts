import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  },
  // ... остальные настройки конфигурации ...
};

export default nextConfig;
