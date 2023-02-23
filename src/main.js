import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
// px2rem 自适应
import "lib-flexible";
=======
import "@/vantui/vant";
// @清除默认样式
import "./assets/style/reset.css";
>>>>>>> 888a391866721323d5c6d25d4fe4bec8045e74aa

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
