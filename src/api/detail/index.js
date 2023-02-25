/* eslint-disable prettier/prettier */
import http from "@/utils/http.js";
export const consondend = (params) => {
  return http({
    url: "/goods/5118",
    method: "GET",
    params,
  });
};
