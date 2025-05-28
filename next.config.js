// next.config.js
const path = require("path");
const nextIntl = require("next-intl/plugin");

module.exports = nextIntl({
  // Tu configuración de Next.js
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
});
