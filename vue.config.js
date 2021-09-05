const path = require("path");
const vueSrc = "./src";

module.exports = {
  runtimeCompiler: true,
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc),
        "@scss": path.join(__dirname, vueSrc, "/scss"),
        "@components": path.join(__dirname, vueSrc, "/components"),
        "@utils": path.join(__dirname, vueSrc, "/utils"),
      },
    },
  },
};
