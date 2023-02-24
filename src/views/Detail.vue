<!-- 商品详情 -->
<template>
  <div class="detail">
    <!-- 详情页导航栏 -->
    <nav>
      <div class="lefticon">
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
      <van-swipe-item v-for="(item, index) in swipeArr" :key="index"
        ><img v-lazy="item"
      /></van-swipe-item>
    </van-swipe>
    <div class="moneyhead">
      <div class="moneyheadr">
        <div class="moneytop">
          <h3>浪漫满屋</h3>
        </div>
        <div class="moneybottom">
          <div class="leftmoney">
            <p>&yen;229</p>
            <p>&yen;289</p>
          </div>
          <div class="rightmoney">
            <p>已售17229</p>
          </div>
        </div>
      </div>
    </div>
    <div class="conston">
      <p v-html="conspush"></p>
    </div>
  </div>
</template>

<script>
import { detailSwipe } from "@/api/swiper";
import { consondend } from "@/api/detail";
export default {
  name: "DetailView",
  data() {
    return {
      // 详情轮播图数据
      swipeArr: [],
      conspush: "",
    };
  },
  created() {
    this.swiperarrfn();
    this.consonfn();
  },
  methods: {
    async swiperarrfn() {
      let res = await detailSwipe({ project_id: 295, site_id: 367 });
      res.result.forEach((item) => {
        this.swipeArr.push(item.s_photos[0].path);
      });
    },
    async consonfn() {
      let res = await consondend({ id: 5118 });
      console.log(res.result.rich_text);
      this.conspush = res.result.rich_text;
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
}
</style>
