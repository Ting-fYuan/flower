import http from "@/utils/http";
// 用户 api

// 登录
export const login = (data) => {
  return http({
    url: "/login",
    method: "POST",
    data,
  });
};

// 注册
export const register = (data) => {
  return http({
    url: "/register",
    method: "POST",
    data,
  });
};
