// 引入api
import { login } from "@/api/user/index";
// 登录模块vuex
module.exports = {
  // 开启命名空间
  namescoped: true,
  state: {
    // token
    token: sessionStorage.getItem("token") || "1",
  },
  getters: {},
  mutations: {
    // 登录请求
    async loginResquest(state, payload) {
      console.log("state", state);
      console.log("payload", payload);
      let loginRes = await login({
        // phone: values["账号"],
        // password: values["密码"],
      });
      console.log(loginRes);
    },
  },
  actions: {},
  modules: {},
};
