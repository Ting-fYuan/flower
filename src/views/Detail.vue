<!-- 商品详情 -->
<template>
  <div class="detail">
    <nav>
      <div class="lefticon">
        <i
          class="iconfont icon-yiliaohangyedeICON-"
          style="font-size: 30px"
        ></i>
      </div>
      <div class="middleimg">
        <img src="" alt="" />
      </div>
      <div class="righticon">
        <i class="iconfont icon-caidan" style="font-size: 30px"></i>
      </div>
    </nav>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      images: [
        "https://upyun.dinghuale.com/uploads/20200713/202007131103233026.jpg",
        "https://upyun.dinghuale.com/uploads/20200713/202007131103322734.jpg",
        "https://upyun.dinghuale.com/uploads/20200713/202007131103391352.jpg",
        "https://upyun.dinghuale.com/uploads/20200713/202007131103474243.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
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
      width: 76.64px;
      height: 40.8px;
      background-color: skyblue;
    }
    .righticon {
      width: 17px;
      height: 15px;
      margin-right: 10px;
    }
  }
  .van-swipe {
    width: 375px;
    height: 375px;
    .van-swipe-item {
      width: 375px;
      height: 375px;
    }
  }
}
</style>
