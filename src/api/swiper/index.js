import http from "@/utils/http.js";
// 轮播图 api
console.log(http);
// 详情页轮播图
export const detailSwipe = (params) => {
  return http({
    url: "/carousel",
    method: "GET",
    params,
  });
};
