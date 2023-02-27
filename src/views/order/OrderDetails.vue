<template>
  <div class="order-details-box">
    <com-head title="订单详情"></com-head>
    <main>
      <div class="address">
        <div class="address-left">
          <i class="iconfont icon-dizhi"></i>
        </div>
        <div class="address-right">
          <p>袁总<span>1331316353435</span></p>
          <p>广州市啊嗲十九点拉升阶段了</p>
        </div>
      </div>
      <div class="pay-bg">
        <div class="pay-bg-msg">
          <i class="iconfont icon-success"></i>
          <p>订单已完成</p>
        </div>
      </div>
      <div class="goods-ctn">
        <div class="goods-box">
          <div class="goods-left">
            <img src="" alt="" />
            <p>商品名称</p>
          </div>
          <div class="goods-right">
            <p>￥11231</p>
            <p>x1</p>
          </div>
        </div>
        <div class="total">
          <p>商品总价</p>
          <p>￥123213</p>
        </div>
      </div>
      <div class="order-msg">
        <p>订单信息</p>
        <div class="order-msg-box">
          <p>订单编号</p>
          <p>4455</p>
        </div>
        <div class="order-msg-box">
          <p>支付宝交易号</p>
          <p>无</p>
        </div>
        <div class="order-msg-box">
          <p>创建时间</p>
          <p>2133123123</p>
        </div>
        <div class="order-msg-box">
          <p>成交时间</p>
          <p>1232132131</p>
        </div>
      </div>
    </main>
    <header>
      <button>再次购买</button>
      <p>已经到底了~</p>
    </header>
  </div>
</template>

<script>
import { getSingleOrder } from "@/api/order";
export default {
  data() {
    return {};
  },
  async created() {
    try {
      await getSingleOrder({});
    } catch (err) {
      return err;
    }
  },
};
</script>

<style lang="scss" scoped>
.order-details-box {
  background-color: #e9ecf0;
  height: 100vh;

  main {
    position: relative;
    .address {
      position: absolute;
      display: flex;
      padding: 15px 0;
      align-items: center;
      top: 40px;
      left: 50%;
      width: 90%;
      transform: translateX(-50%);
      background-color: #ffffff;
      border-radius: 20px;
      box-shadow: 1px 1px 1px rgb(0 0 0 / 10%),
        0.53333vw 0.53333vw 0.53333vw 0.53333vw rgb(0 0 0 / 10%);

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
    .pay-bg {
      width: 100%;
      height: 80px;
      background-color: #52b086;
      .pay-bg-msg {
        display: flex;
        padding: 10px 0 0 15px;
        font-size: 15px;
        font-weight: 600;
        align-items: center;
        color: #fff;

        i {
          margin-right: 5px;
          font-size: 13px;
        }
      }
    }

    .goods-ctn {
      padding: 80px 20px 20px;
      background-color: #fff;
      border-radius: 0 0 10px 10px;
      .goods-box {
        display: flex;
        justify-content: space-between;
        .goods-left {
          display: flex;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            margin-top: 20px;
            margin-left: 15px;
            font-size: 14px;
          }
        }
        .goods-right {
          display: flex;
          align-self: center;
          flex-direction: column;
          p {
            align-self: flex-end;
            line-height: 30px;
            font-size: 12px;
          }
        }
      }
      .total {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        p {
          font-size: 14px;
        }
      }
    }
    .order-msg {
      margin-top: 20px;
      padding: 20px;
      padding-bottom: 80px;
      background-color: #fff;
      height: 100%;
      border-radius: 10px;
      & > p {
        margin-bottom: 15px;
        font-size: 14px;
      }
      .order-msg-box {
        display: flex;
        margin-bottom: 10px;
        justify-content: space-between;
        font-size: 12px;
        color: gray;
      }
    }
  }
  header {
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    button {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 90px;
      height: 40px;
      background-color: #884f22;
      color: #fff;
      border-radius: 20px;
      font-size: 13px;
    }
    p {
      color: #000000a9;
      text-align: center;
    }
  }
}
</style>
