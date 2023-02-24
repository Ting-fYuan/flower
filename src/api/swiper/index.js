import http from "@/utils/http.js";
// 轮播图 api
console.log(http);
// import request from "@/utils/request.js";

// export function banner(params) {
//   return request.get("/api/carousel", params, {
//     Headers: {
//       isId: true,
//     },
//   });
// }

export const banner = (params) => {
  return http({
    url: "/carousel",
    method: "GET",
    params,
    headers: {
      isId: true,
    },
  });
};
