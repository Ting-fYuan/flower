<template>
  <div class="coupon">
    <com-head title="优惠券"></com-head>
    <div class="couponContent">
      <div class="noCoupon">
        <img src="@/assets/images/coupon.png" class="couponImg" alt="" />
        <span class="notextTop">暂无优惠券</span>
        <span class="notextBotoom">据说下单后有机会获得大额劵喔~</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CouponView",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.coupon {
  width: 100%;
  height: 100vh;
  background: #eaebef;
  .couponContent {
    width: 100%;
    .noCoupon {
      margin: 20px auto 0;
      display: flex;
      flex-direction: column;
      justify-content: center; /*水平居中*/
      align-items: center; /*垂直居中*/
      .couponImg {
        margin-bottom: 10px;
        width: 50%;
      }
      .notextTop {
        margin-bottom: 5px;
        color: #555555;
        font-size: 14px;
        font-weight: 600;
      }
      .notextBotoom {
        margin-top: 5px;
        color: #555555;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
