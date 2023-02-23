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
}
</style>
