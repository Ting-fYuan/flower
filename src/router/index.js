import Vue from "vue";
import VueRouter from "vue-router";

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
    meta: {
      isAuth: true,
    },
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
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/views/individual_center/Setting.vue"),
    meta: {
      isAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
