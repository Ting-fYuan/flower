// axios 二次封装
import axios from "axios";

// vant 轻提示
import { Toast } from "vant";

// 引入 vuex 可直接获取 vuex 数据
// import store from "@/store";

// 项目 id
const BASE_PROJECT_ID = 295;

// 实例化axios (自定义配置)
const http = axios.create({
  // 基础请求路径
  baseURL: process.env.VUE_APP_BASEURL,
  // 请求头
  headers: {
    // 默认都不需要设置请求头
    isToken: false, // 是否需要token
    isId: false, // 是否需要project_id
  },
  // 响应时间
  timeout: 5000,
});

// 请求拦截器 (每次请求都会触发)
http.interceptors.request.use(function (config) {
  // 每次请求显示加载中
  Toast.loading({
    message: "加载中...",
    forbidClick: true, // 禁用点击背景
    duration: 20000, // 时长
  });

  // 是否需要token
  if (config.headers.isToken) {
    console.log("需要登录");
  }

  // 是否需要项目id
  if (config.headers.isId) {
    // get 请求将项目id放到params
    if (config.method == "get" || config.method == "GET") {
      config.params["project_id"] = BASE_PROJECT_ID;
    } else config.data["project_id"] = BASE_PROJECT_ID;
  }
});

// 响应拦截器 (每次响应都会触发)
http.interceptors.response.use(
  function (response) {
    // 关闭loadding
    Toast.clear;

    // 响应数据返回出去
    return response.data;
  },
  function (error) {
    // console.log(error.response.data);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default http;
