import http from "@/utils/http";

// 登录
export const login = (data) => {
  return http({
    url: "/login",
    method: "POST",
    data,
  });
};

// 登录
export const register = (data) => {
  return http({
    url: "/register",
    method: "POST",
    data,
  });
};
