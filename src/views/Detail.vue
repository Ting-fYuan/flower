<!-- 商品详情 -->
<template>
  <div class="detail">
    <!-- 详情页导航栏 -->
    <nav>
      <div class="lefticon" @click="lefticonfn">
        <i
          class="iconfont icon-yiliaohangyedeICON-"
          style="font-size: 30px"
        ></i>
      </div>
      <div class="middleimg">
        <img src="http://www.dinghuale.com/public/images/logo.png" alt="logo" />
      </div>
      <div class="righticon">
        <i class="iconfont icon-caidan" style="font-size: 30px"></i>
      </div>
    </nav>
    <!-- 详情页轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" touchable>
      <van-swipe-item v-for="(item, index) in swipeArrs" :key="index"
        ><img v-lazy="item.path" alt="图片"
      /></van-swipe-item>
    </van-swipe>
    <div class="moneyhead">
      <div class="moneyheadr">
        <div class="moneytop">
          <h3>{{ resname }}</h3>
        </div>
        <div class="moneybottom">
          <div class="leftmoney">
            <p>&yen;{{ consale_price }}</p>
            <p>&yen;{{ conprice }}</p>
          </div>
          <div class="rightmoney">
            <p>已售17229</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 富文本上部分数据 -->
    <div class="conston">
      <div class="constop">
        <p v-html="consonptop"></p>
      </div>
      <!-- 数量 -->
      <div class="cutbut">
        <div class="cutauto">
          <p>数量</p>
          <van-stepper v-model="value" />
        </div>
      </div>
      <!-- 订单评价 -->
      <div class="appraisal">
        <div class="appraisalBox">
          <div class="appraisalhead">
            <p>订单评价</p>
            <p>最近已有1330评论</p>
          </div>
          <div class="appraisalmain">
            <div class="appraisTop">
              <img src="../assets/images/morenTou.png.webp" alt="图片" />
              <p>147****2479</p>
              <img src="../assets/images/WechatIMG264 1.webp" alt="图片" />
            </div>
            <div class="appraisBottom">
              <p>一大束玫瑰花，老婆非常喜欢。花也很新鲜，推荐大家买</p>
              <img
                src="../assets/images/202012251046531552.jpeg.webp"
                alt="图片"
              />
            </div>
          </div>
          <div class="appraisalmain">
            <div class="appraisTop">
              <img src="../assets/images/morenTou.png.webp" alt="图片" />
              <p>147****2479</p>
              <img src="../assets/images/WechatIMG264 1.webp" alt="图片" />
            </div>
            <div class="appraisBottom">
              <p>一大束玫瑰花，老婆非常喜欢。花也很新鲜，推荐大家买</p>
              <img
                src="../assets/images/202012251046531552.jpeg.webp"
                alt="图片"
              />
            </div>
          </div>
          <div class="appraibtn">
            <button>查看更多评价</button>
          </div>
        </div>
      </div>
      <div class="consbottom">
        <span>产品详情</span>
        <p v-html="consonbottom"></p>
      </div>
    </div>
    <!-- 购买按钮 -->
    <footer>
      <div class="footer">
        <van-goods-action>
          <van-goods-action-icon icon="chat-o" text="客服" />
          <van-goods-action-icon icon="cart-o" text="购物车" />
          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="warningfn"
          />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </div>
    </footer>
  </div>
</template>

<script>
// import { detailSwipe } from "@/api/swiper";
import { consondend } from "@/api/detail";
export default {
  name: "DetailView",
  data() {
    return {
      // 详情轮播图数据
      swipeArrs: [],
      // 商品名称
      resname: "",
      // 商品原价
      conprice: "",
      // 商品优惠价格
      consale_price: "",
      conspush: "",
      // 后台副文本上半部分数据
      consonptop: "",
      // 后台副文本下半部分数据
      consonbottom: "",
      // 数量
      value: 1,
      shopsId: "",
    };
  },
  created() {
    // 获取商品id
    this.shopsId = this.$route.query.id;
    this.consonfn();
  },
  methods: {
    // 后退按钮
    lefticonfn() {
      this.$router.back(1);
    },
    async consonfn() {
      let res = await consondend(this.shopsId);
      // 轮播图取消第一个数据
      this.swipeArrs = res.result.s_goods_photos.splice(0, 1);
      // 轮播图数据
      this.swipeArrs = res.result.s_goods_photos;
      // 商品名称
      this.resname = res.result.name;
      // 商品原价
      this.conprice = res.result.price;
      // 商品优惠价格
      this.consale_price = res.result.sale_price;
      this.conspush = res.result.rich_text;
      // 分隔后台数据
      if (this.conspush) {
        this.consonptop = this.conspush.split(
          "<blockquote><br></blockquote>"
        )[0];
        this.consonbottom = this.conspush.split(
          "<blockquote><br></blockquote>"
        )[1];
      }
    },
    warningfn() {
      // this.$router()
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  // 头部导航栏
  nav {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #fff;
    width: 375px;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .lefticon {
      width: 13px;
      height: 22px;
      margin-left: 20px;
    }
    .middleimg {
      width: 85px;
      height: 40.8px;
      // background-color: skyblue;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .righticon {
      width: 17px;
      height: 15px;
      margin-right: 10px;
    }
  }
  // 轮播图
  .my-swipe {
    width: 375px;
    height: 375px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .moneyhead {
    width: 375px;
    height: 95px;
    position: relative;
    background-color: #fff;
    .moneyheadr {
      position: absolute;
      width: 345px;
      height: 64px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;

      .moneytop {
        height: 21px;

        h3 {
          width: 60px;
          height: 21px;
          opacity: 1;
          color: rgba(85, 85, 85, 1);
          font-size: 15px;
          font-weight: 400;
          font-family: "PingFang SC";
          text-align: left;
        }
      }
      .moneybottom {
        width: 345px;
        height: 43px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .leftmoney {
          width: 103px;
          height: 28px;
          display: flex;
          justify-content: space-around;
          p {
            &:nth-of-type(1) {
              opacity: 1;
              color: rgba(255, 115, 76, 1);
              font-weight: 700;
              text-align: left;
              font-size: 20px;
              font-family: "Tahoma";
            }
            &:nth-of-type(2) {
              opacity: 1;
              color: rgba(180, 186, 191, 1);
              font-weight: 400;
              text-align: left;
              font-size: 14px;
              font-family: "PingFang SC";
              padding-top: 5px;
              text-decoration: line-through;
            }
          }
        }
        .rightmoney {
          p {
            width: 69px;
            height: 17px;
            opacity: 1;
            color: rgba(85, 85, 85, 1);
            font-size: 12px;
            font-weight: 400;
            font-family: "PingFang SC";
            text-align: left;
          }
        }
      }
    }
  }
  .constop {
    width: 375px;
    height: 173px;
    border-top: 1px solid #555555;
    background-color: #fff;
    p {
      width: 345px;
      height: 41px;
      margin: 0 auto;
      font-size: 15px;
      color: #555555;
      line-height: 41px;
    }
  }
  .cutbut {
    width: 375px;
    height: 62px;
    opacity: 1;
    position: relative;
    background: #ffffff;
    .cutauto {
      position: absolute;
      width: 345px;
      height: 52px;
      opacity: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      p {
        width: 28px;
        height: 30px;
        opacity: 1;
        color: #555555;
        font-size: 14px;
        font-weight: 400;
        font-family: "PingFang SC";
        text-align: left;
        line-height: 30px;
      }
      .van-stepper {
        width: 269.8px;
        height: 32px;
      }
    }
  }
  .appraisal {
    width: 375px;
    background-color: #fff;
    .appraisalBox {
      width: 345px;
      padding: 0px 15px;
      .appraisalhead {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e9ecf0;
        p {
          &:nth-of-type(1) {
            width: 64px;
            height: 22px;
            opacity: 1;
            color: #555555;
            font-size: 16px;
            font-weight: 400;
          }
          &:nth-of-type(2) {
            width: 111px;
            height: 17px;
            opacity: 1;
            color: #333333;
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
      .appraisalmain {
        padding-top: 20px;
        padding-bottom: 10px;
        .appraisTop {
          padding-top: 5px;
          display: flex;
          position: relative;
          flex-direction: row;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
            &:nth-of-type(2) {
              position: absolute;
              right: 0;
              width: 14px;
              height: 14px;
              opacity: 1;
            }
          }
          p {
            width: 85px;
            height: 17px;
            opacity: 1;
            padding-left: 10px;
            color: #555555;
            font-size: 14px;
            font-weight: 400;
            font-family: "Tahoma";
          }
        }
        .appraisBottom {
          p {
            padding-top: 10px;
            font-size: 14px;
          }
          img {
            padding-top: 20px;
            width: 55.19px;
            height: 73.58px;
          }
        }
      }
      .appraibtn {
        width: 84px;
        height: 29px;
        border: 1px solid #232628;
        margin: 0 auto;

        button {
          width: 84px;
          height: 29px;
          opacity: 1;
          color: #232628;
          font-size: 12px;
          font-weight: 400;
          background-color: #fff;
        }
      }
    }
  }
  .consbottom {
    width: 360px;
    height: 100%;
    background-color: #fff;
    margin-bottom: 30px;
    span {
      padding-left: 15px;
      width: 66px;
      height: 23px;
      opacity: 1;
      color: #555555;
      font-size: 16.5px;
      font-weight: 400;
      font-family: "PingFang SC";
      display: block;
      width: 100%;
    }
  }
}
::v-deep img {
  width: 100%;
}
</style>
