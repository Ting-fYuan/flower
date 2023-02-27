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
    // 更新用户数据
    updateUserInfo(state, payload) {
      state.token = payload.token;
      state.userInfo = payload;
      // tokrn数据持久化
      localStorage.setItem("token", payload.token);
      // 用户信息数据持久化
      localStorage.setItem("userInfo", JSON.stringify(payload));
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
        Toast.success("登陆成功");
        // 存储到vuex
        ctx.commit("updateUserInfo", loginRes.result);
        // 是否进入过鉴权页面
        if (loginRes && router.history.current.query.redirect) {
          router.push(router.history.current.query.redirect);
        } else {
          router.push("/");
        }
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
          // verify: "1234",
          realName: "ccc",
        });
        if (registerRes) {
          Toast.success("注册成功，请切换登录");
          router.go();
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.msg === "手机号码已注册") {
          Toast.fail("手机号码已注册");
        } else {
          Toast.fail("注册失败，参数不对或缺失");
        }
        // console.log(error.response.data.msg);
      }
    },
  },
};
