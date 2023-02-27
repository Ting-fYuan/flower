import http from "@/utils/http.js";
// 订单api

//添加订单
export const addOrder = (data) => {
  return http({
    url: "/order",
    method: "POST",
    data,
    headers: {
      isToken: true,
      isId: true,
    },
  });
};

// 支付订单
export const orderPay = (data) => {
  return http({
    url: "/orderpay",
    method: "POST",
    data,
    headers: {
      isToken: true,
    },
  });
};

// 获取订单列表
export const getOrder = (params) => {
  return http({
    url: "/order",
    method: "GET",
    params,
    headers: {
      isToken: true,
      isId: true,
    },
  });
};

// 获取单条订单信息
export const getSingleOrder = ($id) => {
  return http({
    url: `/order/${$id}`,
    method: "GET",
    headers: {
      isToken: true,
      isId: true,
    },
  });
};
