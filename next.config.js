// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en", "es", "gl"],
    defaultLocale: "es",
  },

  webpack(config) {
    // Alias '@' → './src'
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};
