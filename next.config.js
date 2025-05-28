// next.config.js
const path = require("path");
const createNextIntlPlugin = require("next-intl/plugin").default;

module.exports = createNextIntlPlugin()({
  // Aquí dentro es tu Next.js config
  webpack(config) {
    // 1) preservamos los alias internos de Next.js
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      // 2) añadimos el nuestro
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
});
