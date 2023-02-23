import http from "@/utils/http.js";

// 获取购物车
export const getShopCarApi = (params) => {
  return http({
    url: "/shoppingCart",
    method: "GET",
    params,
    headers: {
      isToken: true,
    },
  });
};
