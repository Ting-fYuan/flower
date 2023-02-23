import Vue from "vue";
import VueRouter from "vue-router";
import SearchView from "../views/Search.vue";
import IndexView from "../views/Index.vue";
// @分支功能页面（详情页）
import DetailView from "../views/Detail.vue";

import CategoryView from "../views/Category.vue";
// @分支功能页面（子分类）
import ClassificationView from "../views/self_classification/Classification.vue";

import ShopView from "../views/Shop.vue";
import HomeView from "../views/Home.vue";
// @分支功能页面（个人中心）
// ******************************************
import OrderView from "../views/individual_center/Order.vue";

import PaymentView from "../views/individual_center/Payment.vue";
import SendingView from "../views/individual_center/Sending.vue";
import CommentView from "../views/individual_center/Comment.vue";
import CompleteView from "../views/individual_center/Complete.vue";

import CouponView from "../views/individual_center/Coupon.vue";
import AddressView from "../views/individual_center/Address.vue";
import SettingView from "../views/individual_center/Setting.vue";

import RegisterView from "../views/user_infomation/Register.vue";
import LoginView from "../views/user_infomation/Login.vue";
// ******************************************
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: IndexView,
  },
  {
    path: "/detail",
    name: "detail",
    component: DetailView,
  },
  {
    path: "/category",
    name: "category",
    component: CategoryView,
  },
  // *************************
  {
    path: "/classification",
    name: "classification",
    component: ClassificationView,
  },
  // *************************
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  // @ 分支功能页面(个人中心)
  {
    path: "/order",
    name: "order",
    component: OrderView,
    meta: {
      isAuth: true,
    },
  },
  // ************************
  {
    path: "/payment",
    name: "payment",
    component: PaymentView,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/sending",
    name: "sending",
    component: SendingView,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/comment",
    name: "comment",
    component: CommentView,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/complete",
    name: "complete",
    component: CompleteView,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      isAuth: true,
    },
  },
  // ******************
  {
    path: "/coupon",
    name: "coupon",
    component: CouponView,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/address",
    name: "address",
    component: AddressView,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
    meta: {
      isAuth: true,
    },
  },
  //  * 购物车模块
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
