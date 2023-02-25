import http from "@/utils/http";
// 地址 api

// 获取所有城市地址
export const getAllcity = (params) => {
  return http({
    url: "/city",
    method: "GET",
    params,
  });
};

// 获取用户默认地址
export const defaultAddressApi = () => {
  return http({
    url: "/defalutAddress",
    method: "GET",
    headers: {
      isToken: true,
    },
  });
};

// 获取用户地址
export const getAddressApi = () => {
  return http({
    url: "/address",
    method: "GET",
    headers: {
      isToken: true,
    },
  });
};
