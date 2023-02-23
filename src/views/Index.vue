<!-- 首页 -->
<template>
  <div class="box">
    <div class="top">1</div>
    <div class="swiper">12</div>
  </div>
</template>

<script>
export default {
  name: "IndexView",
  data() {
    return {};
  },
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
    background-color: red;
    position: sticky;
    top: 0;
  }
  .swiper {
    width: 100%;
    height: 205px;
    background-color: pink;
  }
}
</style>
