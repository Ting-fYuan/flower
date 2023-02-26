import Vue from "vue";
import VueRouter from "vue-router";
// 引入 vuex
import vuex from "@/store";
import { Toast } from "vant";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/index",
  },
  // 主页
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/Index.vue"),
  },
  // @商品详情页面
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/views/Detail.vue"),
  },
  // 分类
  {
    path: "/category",
    name: "category",
    component: () => import("@/views/Category.vue"),
    //子路由
    children: [
      {
        path: "/category/UseView",
        name: "UseView",
        component: () => import("@/views/children_route/use.vue"),
      },
      {
        path: "/category/MaterialView",
        name: "MaterialView",
        component: () => import("@/views/children_route/material.vue"),
      },
      {
        path: "/category/ClassView",
        name: "ClassView",
        component: () => import("@/views/children_route/class.vue"),
      },
      {
        path: "/category/NumberView",
        name: "NumberView",
        component: () => import("@/views/children_route/number.vue"),
      },
    ],
  },
  // @商品子分类
  {
    path: "/classification",
    name: "classification",
    component: () => import("@/views/self_classification/Classification.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/Shop.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/Search.vue"),
  },
  // @ 个人中心
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/individual_center/Order.vue"),
    meta: {
      isAuth: true,
    },
  },

  {
    path: "/payment",
    name: "payment",
    component: () => import("@/views/individual_center/Payment.vue"),
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/payfinished",
    name: "payfinished",
    component: () => import("@/views/individual_center/PayFinished.vue"),
    // meta: {
    //   isAuth: true,
    // },
  },
  {
    path: "/sending",
    name: "sending",
    component: () => import("@/views/individual_center/Sending.vue"),
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/comment",
    name: "comment",
    component: () => import("@/views/individual_center/Comment.vue"),
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/complete",
    name: "complete",
    component: () => import("@/views/individual_center/Comment.vue"),
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/user_information/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/user_information/Register.vue"),
    meta: {
      isAuth: true,
    },
  },

  {
    path: "/coupon",
    name: "coupon",
    component: () => import("@/views/individual_center/Coupon.vue"),
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/individual_center/Address.vue"),
    meta: {
      isAuth: true,
    },
  },
  // 地址编辑页
  {
    path: "/addressEdit",
    name: "addressEdit",
    component: () => import("@/views/individual_center/AddressEdit.vue"),
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/views/individual_center/Setting.vue"),
    meta: {
      isAuth: true,
    },
  },
  // 填写订单
  {
    path: "/fillOrder",
    name: "fillOrder",
    component: () => import("@/views/order/FillOrder.vue"),
  },
  // 订购人页面
  {
    path: "/subscriber",
    name: "subscriber",
    component: () => import("@/views/order/SubscriberView.vue"),
    meta: {
      isAuth: true,
    },
  },
  // 发票页面
  {
    path: "/receipt",
    name: "receipt",
    component: () => import("@/views/order/ReceiptEdit.vue"),
    meta: {
      isAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 判断页面是否需要授权
  if (to.matched.some((item) => item.meta.isAuth)) {
    // 判断是否登录
    if (vuex.state.loginStore["token"]) {
      // 已登录放行
      next();
    } else {
      next({
        path: "/login",
        // 完整路径
        query: { redirect: to.fullPath },
      });
      Toast({
        message: "请先登录",
        position: "bottom",
      });
    }
  } else {
    // 不需要授权
    next();
  }
});

export default router;
