const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      // 2023-02-04 在引入全局sass前需安裝我們要的loader，npm install --save-dev node-sass sass-loader
      // 2023-02-06 經測試不一定要安裝 node-sass  
      sass: {
        additionalData: 
        `
        @import "@/assets/scss/base/_index.scss";
        @import "@/assets/scss/bootstrap/_index.scss";
        @import "@/assets/scss/component/_index.scss";
        `
      },
    }
  },
  // 使用 http-proxy-middleware 代理解决 Api跨域問題
  devServer: { 
    proxy: { 
      '/api': { 
        target: 'https://pawndemo.karwee01.com/api', 
        pathRewrite: { '^/api': '' }, 
        changeOrigin: true, 
        ws: true 
      }, 
    } 
  }
})
