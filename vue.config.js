const { defineConfig } = require("@vue/cli-service");
// const proxy = require("http-proxy-middleware");
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置打包更改根目录
  publicPath: "./",
  // 配置代理服务器
  devServer: {
    open: false,
    host: "localhost",
    port: 8080,
  },
});
