import http from "@/utils/http";

// 获取所有城市地址
export const getAllcity = (params) => {
  return http({
    url: "/city",
    method: "GET",
    params,
    headers: {
      isId: true,
    },
  });
};
