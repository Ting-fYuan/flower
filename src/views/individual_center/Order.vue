<!-- 全部订单 -->
<template>
  <div class="order">
    <div class="orderHead">
      <van-icon
        name="arrow-left"
        color="#333333"
        class="arrowLeft"
        @click="goBack()"
      />
      <span>我的订单</span>
    </div>
    <div class="orderTab">
      <keep-alive>
        <van-tabs v-model="active">
          <van-tab
            animated="true"
            v-for="item in titleList"
            :key="item.id"
            :title="item.title"
            :to="{ name: 'myorder', params: { id: item.id } }"
          ></van-tab>
        </van-tabs>
      </keep-alive>

      <div class="orderContent">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// import { getShopCarApi } from "@/api/shopCar/index";
// import { getOrder } from "@/api/order/index";
export default {
  name: "OrderView",
  data() {
    return {
      active: 0,
      titleList: [
        {
          id: 1,
          title: "待付款",
        },
        {
          id: 2,
          title: "派送中",
        },
        {
          id: 3,
          title: "待评价",
        },
        {
          id: 4,
          title: "已完成",
        },
      ],
    };
  },
  async created() {
    // let shopRes = await getShopCarApi();
    // console.log(shopRes.result);
    // let order = await orderPay();
    // console.log(order);
    // let getorder = await getOrder({ status: "0" });
    // console.log(getorder.result);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  height: 100%;
  .orderHead {
    width: 100%;
    height: 42px;
    opacity: 1;
    border-bottom: 1px solid rgba(243, 245, 247, 1);
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: flex-start; /* 左对齐 */
    .arrowLeft {
      line-height: 42px;
      font-size: 26px;
    }
    span {
      width: 80px;
      height: 42px;
      opacity: 1;
      color: rgba(85, 85, 85, 1);
      font-size: 13px;
      font-weight: 500;
      line-height: 42px;
      margin-left: auto; /* 居中对齐的样式 */
      margin-right: auto;
    }
  }
  .orderTab {
    width: 100%;
    height: calc(100vh - 42px);
    margin-top: 13px;
  }
}
</style>
