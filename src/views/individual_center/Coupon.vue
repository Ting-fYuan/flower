<template>
  <div class="coupon">
    <div class="couponHead">
      <van-icon name="arrow-left" color="#333333" class="arrowLeft" />
      <span>我的优惠券</span>
    </div>
    <div class="couponContent">
      <div class="noCoupon">
        <img src="@/assets/imgs/coupon.png" class="couponImg" alt="" />
        <span class="notext">暂无内容</span>
      </div>
    </div>
    <!-- 优惠券单元格 -->
    <!-- <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    /> -->
    <!-- 优惠券列表 -->
    <!-- <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup> -->
  </div>
</template>

<script>
// const coupon = {
//   available: 1,
//   condition: "无使用门槛\n最多优惠12元",
//   reason: "",
//   value: 150,
//   name: "优惠券名称",
//   startAt: 1489104000,
//   endAt: 1514592000,
//   valueDesc: "1.5",
//   unitDesc: "元",
// };
export default {
  name: "CouponView",
  data() {
    return {
      // chosenCoupon: -1,
      // coupons: [coupon],
      // disabledCoupons: [coupon],
      // showList: false,
    };
  },
  methods: {
    // onChange(index) {
    //   this.showList = false;
    //   this.chosenCoupon = index;
    // },
    // onExchange(code) {
    //   this.coupons.push(coupon);
    //   console.log(code);
    // },
  },
};
</script>

<style lang="scss" scoped>
.coupon {
  width: 100%;
  height: 100%;
  background: #eaebef;
  .couponHead {
    width: 375px;
    height: 51px;
    opacity: 1;
    border-bottom: 1px solid rgba(243, 245, 247, 1);
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: flex-start; /* 左对齐 */
    .arrowLeft {
      line-height: 51px;
      font-size: 26px;
    }
    span {
      width: 80px;
      height: 51px;
      opacity: 1;
      color: rgba(85, 85, 85, 1);
      font-size: 16px;
      font-weight: 500;
      line-height: 51px;
      margin-left: auto; /* 居中对齐的样式 */
      margin-right: auto;
    }
  }
  .couponContent {
    width: 100%;
    height: calc(100vh - 51px);
    .noCoupon {
      width: 100%;
      height: 300px;
      background: rgba(255, 255, 255, 1);
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center; /*水平居中*/
      align-items: center; /*垂直居中*/
      .couponImg {
        margin-bottom: 10px;
      }
      .notext {
        color: #ff734c;
        font-size: 14px;
      }
    }
  }
}

// ::v-deep .van-cell--clickable {
//   height: 50px;
//   font-size: 18px;
//   line-height: 50px;
// }
// ::v-deep .van-cell__right-icon {
//   line-height: 50px;
// }
</style>
