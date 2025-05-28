// next.config.ts
import { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Añadimos aquí la sección de webpack
  webpack(config) {
    config.resolve.alias = {
      // preserva cualquier alias existente...
      ...(config.resolve.alias ?? {}),
      // y añade el tuyo:
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default createNextIntlPlugin()(nextConfig);
