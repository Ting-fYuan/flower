// 引入api
import { login } from "@/api/user";
// vant 轻提示
import { Toast } from "vant";
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
      try {
        let loginRes = await login({
          phone: payload["modile"],
          password: payload["password"],
        });
        if (payload["modile"] != "" && payload["password"] != "") {
          Toast.success("登陆成功");
          // tokrn数据持久化
          localStorage.setItem("token", loginRes.result.token);
          // 用户信息数据持久化
          localStorage.setItem("userInfo", JSON.stringify(loginRes.result));
        }
        // console.log(loginRes);
      } catch (error) {
        console.log(error);
        Toast.fail("账号或密码缺失");
      }
    },
  },
};
