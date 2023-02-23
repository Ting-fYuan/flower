import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// @px2rem 自适应
import "lib-flexible";
// @按需引入vantui
import "@/vantui/vant";
// @清除默认样式
import "./assets/style/reset.css";
// 引入公共组件
import CommonHead from "@/components/CommonHead.vue";

// 生产提示
Vue.config.productionTip = false;

// 注册全局组件
Vue.component("com-head", CommonHead);
new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
