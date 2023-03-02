<template>
  <div class="pay-order-box">
    <com-head title="支付订单" menu="true"></com-head>
    <main>
      <div class="order-top">
        <p>等待买家付款</p>
        <p>剩{{ orderTime }}自动关闭</p>
      </div>
      <div class="address">
        <div class="address-left">
          <i class="iconfont icon-dizhi"></i>
        </div>
        <div class="address-right">
          <p>
            {{ orderData?.s_address.name
            }}<span>{{ orderData?.s_address.phone }}</span>
          </p>
          <p>
            {{
              orderData?.s_address.area_name + "  " + orderData?.s_address.desc
            }}
          </p>
        </div>
      </div>
      <div class="order-ctn">
        <div class="shop">
          <p>商品信息</p>
          <div class="shop-msg">
            <img src="" alt="" />
            <div class="shop-msg-center">
              <p>商品名称</p>
              <p>商品数量</p>
            </div>
            <div class="shop-msg-right">商品价格</div>
          </div>
        </div>
        <div class="total">
          <p>商品总价</p>
          <p>￥{{ orderData?.total_price }}</p>
        </div>
        <div class="fare">
          <p>运费</p>
          <p>卖家赠送</p>
        </div>
        <div class="need-total">
          <p>需付款</p>
          <p>￥{{ orderData?.total_price }}</p>
        </div>
        <div class="order-id">
          <p>订单编号：</p>
          <p>{{ orderData?.order_id }}</p>
        </div>
        <div class="create">
          <p>创建时间</p>
          <p>{{ createTime }}</p>
        </div>
      </div>
    </main>
    <!-- 提交订单 -->
    <van-action-sheet
      v-model="showSumbit"
      title="确认付款"
      :style="{ height: '80%' }"
      @close="closeHandle"
    >
      <div id="sumbit-content">
        <p>￥{{ orderData?.total_price }}</p>
        <div class="sumbit-box">
          <p>支付宝账号</p>
          <p>{{ userInfo.phone }}</p>
        </div>
        <div class="sumbit-box">
          <p>支付宝方式</p>
          <p>线上支付</p>
        </div>
        <div class="sumbit-button" @click="showPsw = true">输入密码</div>
      </div>
    </van-action-sheet>
    <!-- 密码 -->
    <van-popup
      v-model="showPsw"
      round
      position="bottom"
      :style="{ height: '50%' }"
      :safe-area-inset-bottom="true"
    >
      <van-password-input :value="keyWrodValue" :focused="showKeyboard" />
      <!-- 数字键盘 -->
      <van-number-keyboard v-model="keyWrodValue" :show="showKeyboard" />
    </van-popup>
    <footer>
      <button @click="cancelHandle">取消订单</button>
      <button @click="payHandle">继续付款</button>
    </footer>
  </div>
</template>

<script>
import { deleteOrder, getSingleOrder, orderPay } from "@/api/order";
import { Toast } from "vant";
export default {
  data() {
    return {
      // 订单数据
      orderData: null,
      // 唤起密码框
      showPsw: false,
      // 提交订单
      showSumbit: false,
      // 密码
      keyWrodValue: "",
      // 密码聚焦
      showKeyboard: true,
    };
  },
  async created() {
    try {
      const { id } = this.$route.query;
      if (!id) {
        this.$router.replace("/index");
        return;
      }
      // 获取单条订单
      const { result } = await getSingleOrder(id);
      this.orderData = result;
      console.log(result);
    } catch (err) {
      this.$router.replace("/index");
      return err;
    }
  },
  watch: {
    async keyWrodValue(value) {
      if (value.length === 6 && value !== "123456") {
        this.keyWrodValue = "";
        Toast({
          message: "密码错误！",
          position: "bottom",
        });
      } else if (value == "123456") {
        try {
          const res = await orderPay({
            id: this.$route.query.id,
            status: 1,
          });
          if (res.code === 200) {
            this.showPsw = false;
            this.showSumbit = false;
            this.keyWrodValue = "";
            // 清空购物车
            this.$store.commit("shopCarStore/clearShopCar");
            // 请求购物车
            this.$store.dispatch("shopCarStore/getShopCarList");
            Toast.success({
              message: "支付成功",
              forbidClick: true,
            });
            setTimeout(() => {
              this.$router.back();
            }, 1000);
          }
        } catch (err) {
          return err;
        }
      }
    },
  },
  computed: {
    // 订单创建时间
    createTime() {
      const time = this.orderData?.createdAt.split("T");
      return time && time[0] + "  " + time[1].slice(0, 8);
    },
    // 订单剩余时间
    orderTime() {
      let res = Date.now() - this.orderData?.order_time;
      const time = new Date(res);
      return `${time.getHours()}小时${time.getMinutes()}分`;
    },
    // 用户信息
    userInfo() {
      return this.$store.state.loginStore.userInfo;
    },
  },
  methods: {
    // 取消订单
    async cancelHandle() {
      try {
        await deleteOrder(this.orderData.id);
        this.$router.back();
      } catch (e) {
        Toast({
          message: "取消订单失败",
          position: "bottom",
        });
        return e;
      }
    },
    // 支付订单
    payHandle() {
      this.showSumbit = true;
    },
    // 取消支付
    closeHandle() {
      this.showPayConfirm = true;
    },
    // 继续支付
    conFHandle() {
      this.showSumbit = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.address {
  display: flex;
  margin: 0 auto;
  padding: 15px 0;
  align-items: center;
  background-color: #ffffff;
  .address-left {
    margin: 0 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #894e22;
    text-align: center;

    i {
      line-height: 40px;
      font-size: 20px;
      color: #ffffffd8;
    }
  }
  .address-right {
    p {
      font-size: 14px;
      &:first-of-type {
        margin-bottom: 5px;
        span {
          display: inline-block;
          text-indent: 1em;
          font-size: 12px;
          color: #000000a4;
        }
      }
      &:last-of-type {
        font-size: 12px;
      }
    }
  }
}

footer {
  position: fixed;
  display: flex;
  padding: 10px 5%;
  width: 90%;
  justify-content: space-between;
  bottom: 0;
  background-color: #fff;
  border-top: 0.5px solid gray;

  button {
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 15px;
    &:first-of-type {
      background-color: #fff;
      color: #894e22;
      border: 0.5px solid #894e22;
    }
    &:last-of-type {
      background-color: #894e22;
      color: #fff;
    }
  }
}

// 密码面板
#sumbit-content {
  padding: 0 10px;
  border-top: 1px solid #f0f0f0;
  & > p {
    padding: 40px 0;
    width: 100%;
    color: #000;
    text-align: center;
    font-weight: 600;
    font-size: 28px;
  }
  .sumbit-box {
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
    border-bottom: 0.5px solid #d0d0d0;
    p {
      font-size: 16px;
    }
  }
  .sumbit-button {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    font-size: 16px;
    color: blue;
  }
}
</style>
