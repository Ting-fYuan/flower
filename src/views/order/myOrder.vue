<template>
  <div class="myorder">
    <!-- 待付款 -->
    <div class="obligation" v-if="routeId == 1">
      <div class="obligationContent" v-if="orderList == ''">
        <img src="@/assets/imgs/coupon.png" class="obligationImg" alt="" />
        <span class="obligationText">暂无内容</span>
      </div>
      <div class="obligationContent" v-else>待付款</div>
    </div>
    <!-- 派送中 -->
    <div class="delivery" v-if="routeId == 2">
      <div class="deliveryContent" v-if="orderList == ''">
        <img src="@/assets/imgs/coupon.png" class="deliveryImg" alt="" />
        <span class="deliveryText">暂无内容</span>
      </div>
      <div class="deliveryContent" v-else>派送中</div>
    </div>
    <!-- 待评价 -->
    <div class="evaluate" v-if="routeId == 3">
      <div class="evaluateContent" v-if="orderList == ''">
        <img src="@/assets/imgs/coupon.png" class="evaluateImg" alt="" />
        <span class="evaluateText">暂无内容</span>
      </div>
      <div class="evaluateContent" v-else>待评价</div>
    </div>
    <!-- 已完成 -->
    <div class="finished" v-if="routeId == 4">
      <div class="finishedContent" v-if="orderList == ''">
        <img src="@/assets/imgs/coupon.png" class="finishedImg" alt="" />
        <span class="finishedText">暂无内容</span>
      </div>
      <div class="finishedContent" v-else>已完成</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {
      routeId: "",
      orderList: [],
    };
  },
  watch: {
    //监听路由地址的改变
    $route: {
      immediate: true,
      handler() {
        if (this.$route.params.id) {
          //需要监听的参数
          this.routeId = this.$route.params.id;
          localStorage.setItem("routeId", this.routeId - 1);
        }
      },
    },
  },
  beforeRouteUpdate(to, from, next) {
    next(); // 一定要调用 next 函数，否则路由会一直处于等待状态
  },
};
</script>

<style lang="scss" scoped>
.myorder {
  width: 100%;
  height: calc(100vh - 84px);
  // 派送中
  .obligation,
  .delivery,
  .evaluate,
  .finished {
    .obligationContent,
    .deliveryContent,
    .evaluateContent,
    .finishedContent {
      width: 100%;
      height: 300px;
      background: rgba(255, 255, 255, 1);
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center; /*水平居中*/
      align-items: center; /*垂直居中*/
      .obligationImg,
      .deliveryImg,
      .evaluateImg,
      .finishedImg {
        margin-bottom: 10px;
      }
      .obligationText,
      .deliveryText,
      .evaluateText,
      .finishedText {
        color: #ff734c;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
