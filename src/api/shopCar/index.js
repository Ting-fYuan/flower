import http from "@/utils/http.js";
// 购物车 api

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

// 获取热门商品(猜你喜欢)
export const guessLikeApi = (params) => {
  return http({
    url: "/goods/hotGoods",
    method: "GET",
    params,
    headers: {
      isId: true,
    },
  });
};
