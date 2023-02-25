<template>
  <div class="fillOrderBox">
    <com-head title="填写订单"></com-head>
    <main>
      <div class="telandarea">
        <div class="receiving">
          <p class="receivingLeft">收货信息</p>
          <div class="txtRight">
            <p>请选择收货信息</p>
            &nbsp;&nbsp;
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
        <div class="delivery">
          <p class="deliveryLeft">送达日期</p>
          <div class="txtRight">
            <p>请填写送达日期</p>
            &nbsp;&nbsp;
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
        <div class="time">
          <p class="timeLeft">配送时间</p>
          <div class="txtRight">
            <p>不限时段</p>
            &nbsp;&nbsp;
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
        <div class="dMethod">
          <p class="dMethodLeft">配送方式</p>
          <div class="txtRight">
            <p>市区免费配送</p>
            &nbsp;&nbsp;
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
        <div class="bordered"></div>
      </div>
      <div class="subscriber">
        <p class="subscriberLeft">订购人信息</p>
        <div class="subscriberRight">
          <div class="txtRight">
            <p>请填写</p>
            &nbsp;&nbsp;
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
      </div>
      <div class="richText">
        <div class="textareaWords">
          <div class="greeting">
            <p class="greetingTitle">贺卡留言</p>
            <textarea
              name=""
              id=""
              placeholder="选填 请输入贺卡留言！"
            ></textarea>
          </div>
          <div class="buyer">
            <p class="buyerTitle">买家留言</p>
            <textarea
              class="buyerText"
              name=""
              id=""
              placeholder="选填 请输入买家留言！"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="goodsMsg">
        <div class="goodsMsgLeft">
          <img src="" alt="" />
          <div class="goodsMsgText">
            <p>永恒回忆</p>
            <p>x 1</p>
          </div>
        </div>
        <p class="price">￥ 329</p>
      </div>
      <div class="payMethods">
        <p class="payTitle">支付方式</p>
        <div class="wechatBox">
          <div class="payMainLeft">
            <i class="iconfont icon-weixinzhifu2"></i>
            <p>微信</p>
          </div>
          <div class="payMainRight">
            <i class="iconfont icon-zhengque1"></i>
          </div>
        </div>
        <div class="alipayBox">
          <div class="payMainLeft">
            <i class="iconfont icon-zhifubaozhifu"></i>
            <p>支付宝</p>
          </div>
          <div class="payMainRight">
            <i class="iconfont icon-zhengque1"></i>
          </div>
        </div>
      </div>
      <div class="billBox">
        <p>发票</p>
        <div class="txtRight">
          <p>选填</p>
          &nbsp;&nbsp;
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div class="priceBox">
        <div class="priceBoxTop">
          <p>共 一 件商品</p>
          <p>优惠: -￥ 1</p>
        </div>
        <div class="priceBoxBtm">
          <p>运费￥ 0</p>
          <p>商品总价: <span>￥169</span></p>
        </div>
      </div>
    </main>
    <footer>
      <div class="footerMain">
        <p class="footerLeft">实付款：￥1222222222</p>
        <button class="footerRight">提交订单</button>
      </div>
      <div class="footerBox"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FillOrder",
  data() {
    return {
      // 支付方式
      checkPayMethods: "1",
    };
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
// 输入框公用
@mixin ComInput() {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  & > p {
    font-size: 15px;
  }
  .txtRight {
    display: flex;
    & > p {
      align-self: center;
    }
    & > i {
      align-self: center;
      font-size: 11px;
    }
  }
}
.fillOrderBox {
  background-color: #f7f7f7;

  // 内容
  main {
    padding: 10px;
    p {
      font-size: 14px;
      color: #000000;
    }
    .telandarea {
      padding: 10px 10px 0;
      background-color: #fff;
      border-radius: 5px;
      .receiving {
        @include ComInput();
        padding-top: 0;
      }
      .delivery {
        @include ComInput();
      }
      .time {
        @include ComInput();
      }
      .dMethod {
        @include ComInput();
      }
      .bordered {
        width: 100%;
        height: 3px;
        background-image: url("@/assets/images/m_orderinfo_bd2.png");
        background-repeat: repeat-x;
        background-size: contain;
      }
    }

    .subscriber {
      @include ComInput();
      @extend .telandarea;
      margin-top: 10px;
      padding: 10px;
    }
    .richText {
      @extend .telandarea;
      margin-top: 10px;
      padding-bottom: 15px;
      p {
        font-size: 15px;
      }
      textarea {
        margin-top: 10px;
        padding: 5px;
        width: 100%;
        min-height: 80px;
        border: 0.5px solid #767676;
        font-size: 12px;
        color: #757575;
        box-sizing: border-box;
      }
      .buyerTitle {
        margin-top: 10px;
      }
    }
    .goodsMsg {
      display: flex;
      margin-top: 10px;
      padding: 25px 10px;
      justify-content: space-between;
      background-color: #fff;
      border-radius: 5px;
      .goodsMsgLeft {
        display: flex;
        img {
          margin-right: 10px;
          width: 65px;
          height: 65px;
        }
        p {
          line-height: 18px;
        }
      }

      & > p {
        align-self: center;
        font-weight: 600;
      }
    }
    .payMethods {
      margin-top: 10px;
      padding: 10px;
      background-color: #fff;
      border-radius: 5px;
      .payTitle {
        margin-bottom: 5px;
      }
      .wechatBox {
        display: flex;
        padding: 7px 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        .payMainLeft {
          display: flex;
          & > i {
            font-size: 20px;
            color: #5ab418;
            align-self: center;
          }
          & > p {
            margin-left: 10px;
            align-self: center;
          }
        }
        .payMainRight {
          align-self: center;
          & > i {
            font-size: 18px;
            color: #ff734c;
          }
        }
      }
      .alipayBox {
        @extend .wechatBox;
        .payMainLeft {
          & > i {
            color: #0fa5e9;
          }
        }
      }
    }
    .billBox {
      @extend .telandarea;
      @include ComInput();
      margin-top: 10px;
      padding: 10px;
    }

    .priceBox {
      margin-top: 10px;
      padding: 10px;
      border-radius: 5px;
      background-color: #fff;
      .priceBoxTop {
        display: flex;
        justify-content: space-between;
        p {
          flex: 1;
        }
      }
      .priceBoxBtm {
        margin-top: 10px;
        @extend .priceBoxTop;
        span {
          color: #ff2222;
        }
      }
    }
  }

  footer {
    .footerMain {
      position: fixed;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      width: 100%;
      min-height: 50px;
      background-color: #fff;
      .footerLeft {
        display: flex;
        justify-content: center;
        line-height: 50px;
        width: 60%;
        color: #884e22;
      }
      .footerRight {
        width: 40%;
        min-height: 100%;
        border: none;
        background-color: #884f22;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
      }
    }

    .footerBox {
      min-height: 50px;
    }
  }
}
</style>
