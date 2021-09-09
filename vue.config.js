const { join } = require('path')
const vueSrc = './src'

module.exports = {
  runtimeCompiler: true,
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': join(__dirname, vueSrc),
        '@scss': join(__dirname, vueSrc, '/scss'),
        '@components': join(__dirname, vueSrc, '/components'),
        '@utils': join(__dirname, vueSrc, '/utils'),
        '@api': join(__dirname, vueSrc, '/api'),
        '@pages': join(__dirname, vueSrc, '/pages'),
        '@layouts': join(__dirname, vueSrc, '/layouts'),
      },
    },
  },
}
