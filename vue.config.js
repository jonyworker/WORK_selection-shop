const { defineConfig } = require('@vue/cli-service')
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
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
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://z0032.ktp888.tw/api',
  //       pathRewrite: { '^/api': '' },
  //       changeOrigin: true,
  //       ws: true
  //     },
  //   } 
  // }
})
