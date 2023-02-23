const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置代理服务器
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
  },
});
