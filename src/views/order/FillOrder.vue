<template>
  <div class="fillOrderBox">
    <com-head title="填写订单"></com-head>
    <main>
      <div class="receiving">
        <div class="receivingLeft">收货信息</div>
        <div class="receivingRight">请选择收货信息</div>
      </div>
      <div class="delivery">
        <div class="deliveryLeft">送达日期</div>
        <div class="deliveryRight">请填写送达日期</div>
      </div>
      <div class="time">
        <div class="timeLeft">配送时间</div>
        <div class="timeRight">不限时段</div>
      </div>
      <div class="dMethod">
        <div class="dMethodLeft">配送方式</div>
        <div class="dMethodRight">市区免费配送</div>
      </div>
      <div class="subscriber">
        <div class="subscriberLeft">订购人信息</div>
        <div class="subscriberRight">请填写</div>
      </div>
      <div class="textareaWords">
        <div class="greeting">
          <p class="greetingTitle">贺卡留言</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="选填 请输入贺卡留言"
          ></textarea>
        </div>
        <div class="buyer">
          <div class="buyerTitle">买家留言</div>
          <textarea
            class="buyerText"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="选填 请输入买家留言"
          ></textarea>
        </div>
      </div>
      <div class="goodsMsg">
        <img src="" alt="" />
        <div class="goodsMsgText">
          <p>永恒回忆</p>
          <p>x 1</p>
        </div>
        <p class="price">￥ 329</p>
      </div>
      <div class="payMethods">
        <div class="wechatBox">
          <i></i>
          <p>微信</p>
        </div>
        <div class="alipayBox">
          <i></i>
          <p>支付宝</p>
        </div>
      </div>
      <div class="billBox">
        <p>发票</p>
        <div class="billBoxRight"></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "FillOrder",
  data() {
    return {};
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.fillOrderBox {
  background-color: yellowgreen;
}
</style>
