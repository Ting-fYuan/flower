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
        console.log(router.history.current.query);
        if (router.history.current.query.redirect) {
          router.push(router.history.current.query.redirect);
        } else {
          router.push("/");
        }
        Toast.success("登陆成功");

        // tokrn数据持久化
        localStorage.setItem("token", loginRes.result.token);
        // 用户信息数据持久化
        localStorage.setItem("userInfo", JSON.stringify(loginRes.result));
        // console.log(loginRes);
      } catch (error) {
        // console.log(error);
        Toast.fail("账号或密码缺失");
      }
    },
    // 注册请求
    async registerResquest(ctx, payload) {
      // console.log(payload);
      try {
        // 截取四位手机号码放进名字（后期可改个人信息）
        const RandomNum = payload["modile"].substr(2, 4);
        const registerRes = await register({
          // 唯一值
          phone: payload["modile"],
          password: payload["password"],
          // 唯一值
          name: `${RandomNum}+ccc`,
          sex: 1,
          verify: "1234",
          realName: "ccc",
        });
        console.log(registerRes);
        Toast.success("注册成功");
        router.go();
      } catch (error) {
        console.log(error);
        if (error.response.data.msg == "手机号已注册") {
          Toast.fail("手机号已注册");
        } else {
          Toast.fail("注册失败，参数不对或缺失");
        }
        console.log(error.response.data.msg);
      }
    },
  },
};
