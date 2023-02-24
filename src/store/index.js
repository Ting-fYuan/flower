import Vue from "vue";
import Vuex from "vuex";
import loginStore from "@/store/modules/login";
import shopCarStore from "@/store/modules/shopCar";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { loginStore, shopCarStore },
});
