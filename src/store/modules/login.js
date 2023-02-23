// 引入api
import { login } from "@/api/user";
// 登录模块vuex
export default {
  // 开启命名空间
  namespaced: true,
  state: {
    // token
    token: sessionStorage.getItem("token") || "",
    // 用户信息
    userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || "",
  },
  getters: {},
  mutations: {},
  actions: {
    // 登录请求
    async loginResquest(ctx, payload) {
      // console.log("ctx", ctx);
      // console.log("payload", payload);
      let loginRes = await login({
        phone: payload["账号"],
        password: payload["密码"],
      });
      // console.log(loginRes);
      // tokrn数据持久化
      sessionStorage.setItem("token", loginRes.result.token);
      // 用户信息数据持久化
      sessionStorage.setItem("userInfo", JSON.stringify(loginRes.result));
    },
  },
};
