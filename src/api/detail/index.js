/* eslint-disable prettier/prettier */
// 详情页获取单个商品数据
import http from "@/utils/http.js";
export const consondend = (id) => {
  return http({
    url: `goods/${id}`,
    method: "GET",
  });
};
