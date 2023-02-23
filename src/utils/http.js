// axios 二次封装
// 引入axios请求库
import axios from "axios";
// 引入 vuex 可直接获取 vuex 数据
// import store from "@/store";

// 实例化axios (自定义配置)
const http = axios.create({
  // 基础请求路径
  baseURL: process.env.VUE_APP_BASEURL,
  // 请求头
});

// 导出 axios 实例
export default http;
