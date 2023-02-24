import http from "@/utils/http.js";

// 搜索
export const goodsSearch = (params) => {
  return http({
    url: "/goodsSearch",
    method: "GET",
    params,
    headers: {
      isId: true,
    },
  });
};

// 获取热搜
export const hotSearch = (params) => {
  return http({
    url: "/goods/hotGoods",
    method: "GET",
    params,
    headers: {
      isId: true,
    },
  });
};
