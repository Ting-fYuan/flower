<!-- 首页 -->
<template>
  <div class="box">
    <div class="top">
      <i class="iconfont icon-icon_sousuo"></i>
      <img src="" alt="" />
    </div>

    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="classflies">
      <div class="classfiles_top">
        <ul>
          <li>
            <a href=""><i class="iconfont icon-a-ziyuan642"></i>品牌鲜花网</a>
          </li>
          <li>
            <a href=""><i class="iconfont icon-a-ziyuan642"></i>实拍秀</a>
          </li>
          <li>
            <a href=""><i class="iconfont icon-a-ziyuan642"></i>1小时送达</a>
          </li>
          <li>
            <a href=""><i class="iconfont icon-a-ziyuan642"></i>50w+好评</a>
          </li>
        </ul>
      </div>
      <div class="classfiles_bottom">
        <ul>
          <li>
            <div></div>
            花束
          </li>
          <li>
            <div></div>
            礼盒
          </li>
          <li>
            <div></div>
            蛋糕
          </li>
          <li>
            <div></div>
            花篮
          </li>
          <li>
            <div></div>
            绿植
          </li>
        </ul>
      </div>
    </div>

    <div class="chooseflower">
      <div class="chooseflower_top">一秒选花</div>
      <div class="chooseflower_center">
        <div class="choose_box">
          <div class="choose_box_bottom">送亲友</div>
        </div>
        <div class="choose_box">
          <div class="choose_box_bottom">送长辈</div>
        </div>
        <div class="choose_box">
          <div class="choose_box_bottom">送恋人</div>
        </div>
      </div>

      <div class="chooseflower_bottom">
        <div>
          生日祝福
          <img src="" alt="" />
        </div>
      </div>
    </div>
    <main>
      <div class="main_title">爱情鲜花</div>
      <div class="xian"></div>
      <div class="main_box">
        <div class="goods">
          <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" alt="" />
          <div class="goods_name">浪漫满屋</div>
          <div class="goods_price">
            <span class="price">￥111</span>
            <span class="number">销量1111笔</span>
          </div>
        </div>
      </div>
      <div class="btn">查看更多</div>
    </main>

    <footer>
      <div class="footer_text1">Copyright©2020 成都勿忘我科技有限公司</div>
      <div class="footer_text2">蜀ICP备20016463号-2</div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

export default {
  name: "IndexView",
  components: {},

  created() {},
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 50px;
    background-color: white;
    z-index: 999;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    i {
      font-size: 21px;
    }
  }
  .swiper {
    width: 100%;
    height: 205px;
  }
  .classflies {
    width: 100%;
    height: 118px;
    background-color: white;
    .classfiles_top {
      width: 100%;
      height: 33px;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li {
          font-size: 13px;
          a {
            color: black;
            i {
              font-size: 14px;
              margin-right: 4px;
            }
          }
        }
      }
    }
    .classfiles_bottom {
      width: 100%;
      height: 85px;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
          width: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          font-size: 14px;
          div {
            width: 40px;
            height: 40px;
            background-color: peru;
            border-radius: 50%;
          }
        }
      }
    }
  }

  .chooseflower {
    width: 100%;
    height: 297px;
    background-color: white;
    margin-top: 8px;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    .chooseflower_top {
      width: 100%;
      height: 15px;
      border-left: 1px solid #884e22;
      font-size: 15px;
      font-weight: 600;
      color: #884e22;
      line-height: 15px;
      padding-left: 10px;
    }
    .chooseflower_center {
      width: 100%;
      height: 126px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .choose_box {
        width: 111px;
        height: 126px;
        border-radius: 10px;
        background-color: skyblue;
        position: relative;
        &:nth-of-type(1) .choose_box_bottom {
          background-color: pink;
        }
        &:nth-of-type(2) .choose_box_bottom {
          background-color: green;
        }
        &:nth-of-type(3) .choose_box_bottom {
          background-color: orange;
        }
        .choose_box_bottom {
          width: 100%;
          height: 40px;
          border-radius: 0 0px 10px 10px;
          position: absolute;
          bottom: 0;
          text-align: center;
          line-height: 40px;
          font-size: 15px;
          font-weight: 600;
          color: white;
        }
      }
    }
    .chooseflower_bottom {
      width: 100%;
      height: 106px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 85px;
        height: 106px;
        border-radius: 5px;
        background: rgba(243, 235, 227, 1);
        font-size: 14px;
        font-weight: 600;
        color: #884e22;
      }
    }
  }
  main {
    width: 100%;
    height: 100%;
    margin-top: 8px;
    background-color: white;
    box-sizing: border-box;
    padding: 29px 15px 0 15px;
    .main_title {
      width: 100%;
      text-align: center;
      font-size: 15px;
      font-weight: 600;
    }
    .xian {
      width: 80px;
      height: 4px;
      border-radius: 10px;
      background-color: #884e22;
      margin: 0 auto;
      margin-top: 5px;
    }
    .main_box {
      width: 100%;
      height: 100%;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .goods {
        width: 165px;
        height: 215px;
        margin-bottom: 15px;
        img {
          width: 100%;
          height: 165px;
        }
        .goods_name {
          width: 100%;
          height: 20px;
          color: rgba(102, 102, 102, 1);
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          line-height: 20px;
        }
        .goods_price {
          width: 100%;
          height: 20px;
          margin-top: 5px;
          line-height: 20px;
          display: flex;
          justify-content: space-between;
          .price {
            height: 20px;
            color: red;
            font-size: 14px;
            font-weight: 600;
            text-align: left;
          }
          .number {
            height: 17px;
            color: rgba(153, 153, 153, 1);
            font-size: 12px;
            font-weight: 400;
            text-align: left;
          }
        }
      }
    }
    .btn {
      width: 70px;
      height: 27px;
      margin: 0 auto;
      border: 1px solid rgba(153, 153, 153, 1);
      text-align: center;
      line-height: 27px;
    }
  }
  footer {
    width: 100%;
    height: 80px;
    background-color: white;
    margin-top: 10px;
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    font-weight: 400;
    padding-top: 25px;
    .footer_text1 {
      width: 235px;
      height: 20px;
      margin: 0 auto;
    }
    .footer_text2 {
      width: 125px;
      height: 20px;
      margin: 0 auto;
    }
  }
}
</style>
