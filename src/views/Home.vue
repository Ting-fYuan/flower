<!-- 我的 -->
<template>
  <div>
    <com-head :showBack="false" title="个人中心"></com-head>
    <div class="loginArea">
      <div class="UserArea">
        <img src="../../src/assets/images/homeBackground.jpg" />
        <div class="content" v-if="LoginState">
          <p>Hi,欢迎来到订花乐!</p>
          <button @click="changeLoginState">登录/注册</button>
        </div>
        <div class="content" v-if="!LoginState">
          <div>
            <img src="@/assets/images/avatar.png" alt="默认头像" />
            <span>订花乐用户</span>
          </div>
          <button @click="changeLoginState">注销</button>
        </div>
        <div class="OtherInformationBox">
          <div class="OrderBox">
            <p>
              <span>我的订单</span>
              <span @click="goSearch">全部订单&gt;</span>
            </p>
            <ul>
              <li @click="goPayment">
                <i class="iconfont icon-daifukuan"></i>
                <span>待付款</span>
              </li>
              <li @click="goSending">
                <i class="iconfont icon-daifahuo"></i>
                <span>派送中</span>
              </li>
              <li @click="goComment">
                <i class="iconfont icon-pingjia"></i>
                <span>待评价</span>
              </li>
              <li @click="goComplete">
                <i class="iconfont icon-dingdan"></i>
                <span>已完成</span>
              </li>
            </ul>
          </div>

          <div class="OtherActivity">
            <ul>
              <li @click="goCoupon">
                <p>
                  <i class="iconfont icon-youhuiquan"></i>
                  <span>优惠券</span>
                </p>
                <p>&gt;</p>
              </li>
              <li @click="goAddress">
                <p>
                  <i class="iconfont icon-dizhi"></i>
                  <span>收获地址</span>
                </p>
                <p>&gt;</p>
              </li>
              <li @click="goSetting">
                <p>
                  <i class="iconfont icon-shezhi"></i>
                  <span>设置</span>
                </p>
                <p>&gt;</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
export default {
  name: "HomeView",
  components: { TabBar },
  data() {
    return {
      LoginState: false,
    };
  },
  methods: {
    // @ 切换登录态
    changeLoginState() {
      this.LoginState = !this.LoginState;
    },
    goSearch() {
      this.$router.push("/order");
    },
    goPayment() {
      this.$router.push("/payment");
    },
    goSending() {
      this.$router.push("/sending");
    },
    goComment() {
      this.$router.push("/comment");
    },
    goComplete() {
      this.$router.push("/complete");
    },
    goCoupon() {
      this.$router.push("/coupon");
    },
    goAddress() {
      this.$router.push("/address");
    },
    goSetting() {
      this.$router.push("/setting");
    },
  },
};
</script>

<style lang="scss" scoped>
.loginArea {
  box-sizing: border-box;
  width: 100vw;
  background-color: #e8ecef;
}

.UserArea {
  position: relative;
  width: 100%;
  height: 140px;
  > img {
    width: inherit;
  }
  // @ 登录用户
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: calc(50% - 50vw);
    top: calc(50% - 45px);
    width: inherit;
    height: 90px;
    > p {
      font-size: 14px;
      color: white;
    }
    > button {
      width: 120px;
      height: 36px;
      border: none;
      border-radius: 18px;
      background-color: white;
      font-size: 14px;
    }

    > div {
      display: flex;
      align-items: center;
      img {
        margin-right: 8px;
        width: 64px;
        height: 64px;
        border-radius: 32px;
        opacity: 1;
        border: 2px solid rgba(255, 255, 255, 0.5);
      }
      span {
        width: 70.2px;
        height: 17px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-weight: 400;
        font-family: "PingFang SC";
        text-align: left;
      }
    }

    button {
      color: #ffffff;
      background-color: transparent;
    }
  }

  .OtherInformationBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: -10px;
    width: 364px;
    height: 256px;

    .OrderBox {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: inherit;
      height: 120px;
      background-color: #fff;
      border-radius: 8px;
      > p {
        border-bottom: 1px solid rgba(233, 236, 240, 1);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 40px;
        > span {
          font-size: 14px;
          color: #555555;
        }
      }

      > ul {
        display: flex;
        justify-content: space-around;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          > i {
            color: #555555;
            margin-bottom: 2px;
            font-size: 18px;
          }
          > span {
            color: #555555;
            font-size: 14px;
          }
        }
      }
    }
    .OtherActivity {
      width: inherit;
      height: 130px;
      background-color: #fff;
      border-radius: 8px;
      > ul {
        > li {
          padding: 0px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 40px;
          border-bottom: 1px solid rgba(233, 236, 240, 1);
          &:last-of-type {
            border: none;
          }
          p:first-of-type {
            i {
              margin-right: 6px;
              vertical-align: middle;
              font-size: 18px;
            }
            span {
              vertical-align: middle;
              font-size: 16px;
            }
          }
          p:last-of-type {
            font-size: 20px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
