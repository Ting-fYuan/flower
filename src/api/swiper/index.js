import http from "@/utils/http.js";
// 轮播图 api

// 获取轮播图单个信息
export const logoSwiper = (params) => {
  return http({
    url: `/carousel/${params}`,
    method: "GET",
    headers: {
      isToken: true,
    },
  });
};
