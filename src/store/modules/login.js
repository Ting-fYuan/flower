// 引入api
import { login, register } from "@/api/user";
// vant 轻提示
import { Toast } from "vant";
// 引入路由
import router from "@/router";
// 登录模块vuex
export default {
  // 开启命名空间
  namespaced: true,
  state: {
    // token
    token: localStorage.getItem("token") || "",
    // 用户信息
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || "",
  },
  getters: {},
  mutations: {
    // 清空用户信息
    clearUserInfo(state) {
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
    },
  },
  actions: {
    // 登录请求
    async loginResquest(ctx, payload) {
      try {
        let loginRes = await login({
          phone: payload["modile"],
          password: payload["password"],
        });
        if (router.history.current.query.redirect) {
          router.push(router.history.current.query.redirect);
        } else {
          router.push("/");
        }
        if (payload["modile"] != "" && payload["password"] != "") {
          Toast.success("登陆成功");
          // 登录成功跳转
          // if (condition) {

          // }
          console.log(router.history.current.query);
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
    // 注册请求
    async registerResquest(payload) {
      console.log(payload);
      let registerRes = await register({
        phone: this.form.regPhone,
        password: this.form.regPassword,
        name: "ccc",
        sex: 1,
        realName: "ccc",
      });
      console.log(registerRes);
    },
  },
};
