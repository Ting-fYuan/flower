import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/vantui/vant";
// @清除默认样式
import "./assets/style/reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
