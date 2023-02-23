import http from "@/utils/http";

// 登录
export const login = (params) => {
  return http({
    url: "/login",
    method: "POST",
    params,
  });
};

// 登录
export const register = (params) => {
  return http({
    url: "/register",
    method: "POST",
    params,
  });
};
