<template>
  <div class="myorder">
    <!-- 待付款status为0 -->
    <div class="noobligation" v-if="routeId == 1 && orderList == ''">
      <div class="noobligationContent">
        <img src="@/assets/images/coupon.png" class="obligationImg" alt="" />
        <span class="obligationText">暂无内容</span>
      </div>
    </div>
    <div class="obligation" v-if="routeId == 1 && orderList != ''">
      <div class="obligationContent">
        <div class="obligationGoods" v-for="item in orderList" :key="item.id">
          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.price"
              :desc="item.desc"
              :title="item.goods_name"
              :thumb="item?.s_goods_photos[0].path"
            />
            <template #right>
              <van-button
                square
                type="danger"
                text="删除"
                @click="delCard(item.id)"
              />
            </template>
            <div class="obligationBtn">
              <button class="cancle" @click="goCancle(item.id)">
                取消订单
              </button>
              <button class="gopay" @click="gopay()">去支付</button>
            </div>
          </van-swipe-cell>
        </div>
      </div>
    </div>

    <!-- 派送中 -->
    <div class="nodelivery" v-if="routeId == 2 && orderList == ''">
      <div class="nodeliveryContent" v-if="orderList == ''">
        <img src="@/assets/images/coupon.png" class="deliveryImg" alt="" />
        <span class="deliveryText">暂无内容</span>
      </div>
      <div class="deliveryContent" v-else>派送中</div>
    </div>
    <div class="delivery" v-if="routeId == 2 && orderList != ''">
      <div class="deliveryContent">
        <div class="deliveryGoods" v-for="item in orderList" :key="item.id">
          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.price"
              :desc="item.desc"
              :title="item.goods_name"
              :thumb="item?.s_goods_photos[0].path"
              disabled="true"
            />
            <div class="deliveryBtn">
              <span>待收货</span>
              <button class="check" @click="checkDeli()">查看物流</button>
              <button class="confirm" @click="confirmDeli()">确认收货</button>
            </div>
          </van-swipe-cell>
        </div>
      </div>
    </div>

    <!-- 待评价 -->
    <div class="noevaluate" v-if="routeId == 3 && orderList == ''">
      <div class="noevaluateContent" v-if="orderList == ''">
        <img src="@/assets/images/coupon.png" class="evaluateImg" alt="" />
        <span class="evaluateText">暂无内容</span>
      </div>
      <div class="evaluateContent" v-else>待评价</div>
    </div>
    <div class="evaluate" v-if="routeId == 3 && orderList != ''">
      <div class="evaluateContent">
        <div class="evaluateGoods" v-for="item in orderList" :key="item.id">
          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.price"
              :desc="item.desc"
              :title="item.goods_name"
              :thumb="item?.s_goods_photos[0].path"
            />
            <template #right>
              <van-button
                square
                type="danger"
                text="删除"
                @click="delCard(item.id)"
              />
            </template>
            <div class="evaluateBtn">
              <button @click="goComment()">评价</button>
            </div>
          </van-swipe-cell>
        </div>
      </div>
    </div>

    <!-- 已完成 -->
    <div class="nofinished" v-if="routeId == 4 && orderList == ''">
      <div class="nofinishedContent" v-if="orderList == ''">
        <img src="@/assets/images/coupon.png" class="finishedImg" alt="" />
        <span class="finishedText">暂无内容</span>
      </div>
    </div>
    <div class="finished" v-if="routeId == 4 && orderList != ''">
      <div class="finishedContent">
        <div class="finishedGoods" v-for="item in orderList" :key="item.id">
          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.price"
              :desc="item.desc"
              :title="item.goods_name"
              :thumb="item?.s_goods_photos[0].path"
            />
            <template #right>
              <van-button
                square
                type="danger"
                text="删除"
                @click="delCard(item.id)"
              />
            </template>
            <div class="finished">
              <button class="delOrder" @click="delOrder(item.id)">
                删除订单
              </button>
              <button class="buyAgain" @click="buyAgain(item.id)">
                再次购买
              </button>
            </div>
          </van-swipe-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "MyOrder",
  data() {
    return {
      routeId: "",
      checked: true,
      orderList: [
        {
          id: 4975,
          goods_name: "咖喱鸡肉 ",
          price: 14.8,
          sale_price: 2,
          sold_num: 20,
          desc: "糖点是衡量食物对血糖波动影响的指标。人净含有碳水化合物后，血糖浓度就会升高。",
          s_admin: { id: 260, name: "13729471401" },
          s_goods_photos: [
            {
              id: 26779,
              path: "http://shops-1251395798.cos.ap-nanjing.myqcloud.com/_%E9%BB%98%E8%AE%A4%E9%A1%B9%E7%9B%AE_1670412072167_banner01.webp",
            },
          ],
          updatedAt: "2023-02-22T11:18:27.848Z",
          num: 1,
        },
        {
          id: 4983,
          goods_name: "日式寿司",
          price: 46.8,
          sale_price: 4,
          sold_num: 34,
          desc: "寿司是日本人最喜爱的传统食物之一，主要材料是用醋调味过的冷饭（简称醋饭），再加上鱼肉，海鲜，蔬菜或鸡蛋等作配料，其味道鲜美，很受日本民众的喜爱。",
          s_admin: { id: 260, name: "13729471401" },
          s_goods_photos: [
            {
              id: 26787,
              path: "http://shops-1251395798.cos.ap-nanjing.myqcloud.com/_%E9%BB%98%E8%AE%A4%E9%A1%B9%E7%9B%AE_1670415425891_special%20.webp",
            },
          ],
          updatedAt: "2023-02-22T11:18:27.858Z",
          num: 3,
        },
      ],
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
  methods: {
    // 右滑时点击的删除按钮
    delCard(e) {
      console.log(e);
    },
    // 待付款区域两个按钮
    goCancle(e) {
      Toast("订单已取消~~");
      // 删除订单（根据id）
      console.log(e);
    },
    gopay() {
      Toast("正在跳转支付~~");
      // 获取参数跳转支付页面
    },
    // 派送中区域两个按钮
    checkDeli() {
      Toast("暂无物流信息~~");
    },
    confirmDeli() {
      Toast("订单已完成~~");
      // 需要将订单中的status改为1
    },
    // 待评价区域的按钮
    goComment() {
      Toast("正在前往评价~~");
    },
    // 已完成区域两个按钮
    delOrder(e) {
      Toast("订单已删除~~");
      // 删除订单（根据id）
      console.log(e);
    },
    buyAgain(e) {
      Toast("正在购买~~");
      // 再次订单（根据id）
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.myorder {
  width: 100%;
  height: calc(100vh - 84px);
  // 没有订单时显示
  .noobligation,
  .nodelivery,
  .noevaluate,
  .nofinished {
    .noobligationContent,
    .nodeliveryContent,
    .noevaluateContent,
    .nofinishedContent {
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

  // 待付款和已完成
  .obligation,
  .finished {
    .obligationContent,
    .finishedContent {
      .obligationGoods,
      .finishedGoods {
        .obligationBtn,
        .finished {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 10px;
          button {
            margin-right: 9px;
            border: 1px solid red;
            width: 75px;
            height: 25px;
            font-size: 14px;
            background: #fff;
            border-radius: 35%;
            color: red;
          }
          .cancle,
          .delOrder {
            border: 1px solid #fff;
            color: #666;
          }
          .gopay,
          .buyAgain {
            margin-right: 0;
          }
        }
      }
    }
  }

  // 待收货
  .delivery {
    .deliveryContent {
      .deliveryGoods {
        .deliveryBtn {
          display: flex;
          justify-content: space-between; /* 水平方向两端对齐 */
          align-items: center; /* 垂直方向居中对齐 */
          padding: 10px;
          span {
            flex: 1;
            font-size: 14px;
            color: red;
          }
          button {
            color: red;
            border: 1px solid red;
            width: 75px;
            height: 25px;
            font-size: 14px;
            background: #fff;
            border-radius: 35%;
          }
          .check {
            margin-right: 10px;
            border: 1px solid #fff;
            color: #666;
          }
        }
      }
    }
  }
  // 待评价
  .evaluate {
    .evaluateContent {
      .evaluateGoods {
        .evaluateBtn {
          display: flex;
          justify-content: flex-end;
          padding: 10px;
          button {
            margin-right: 0;
            border: 1px solid red;
            width: 75px;
            height: 25px;
            font-size: 14px;
            background: #fff;
            border-radius: 35%;
            color: red;
          }
        }
      }
    }
  }
}

::v-deep .van-swipe-cell {
  height: 150px;
}
::v-deep .van-card {
  margin-top: 8px;
  width: 98vw;
  background: #a9e4b4;
}
::v-deep .van-button--danger {
  height: 100%;
}
// 商品标题
::v-deep .van-card__title {
  font-size: 15px;
}
// 商品介绍
::v-deep .van-ellipsis {
  font-size: 12px;
  padding-top: 5px;
}

::v-deep .van-card__bottom {
  margin-top: 10px;
}
::v-deep .van-card__price {
  position: relative;
  left: 50%;
}
</style>
