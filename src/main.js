import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// px2rem 自适应
import "lib-flexible";
import "@/vantui/vant";
// @清除默认样式
import "./assets/style/reset.css";
import { Swipe, SwipeItem } from "vant";
// @px2rem 自适应
import "lib-flexible";
// @按需引入vantui
import "@/vantui/vant";
// @清除默认样式
import "./assets/style/reset.css";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
