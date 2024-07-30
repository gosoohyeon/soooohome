const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath : '/soooohome',
  transpileDependencies: true,
  lintOnSave : false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_reset.scss";
        `
      }
    }
  },
})
