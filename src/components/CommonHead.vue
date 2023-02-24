<template>
  <nav class="common-head-box">
    <div v-if="showBack" class="head-box-back" @click.stop="backHandle">
      <i class="iconfont icon-yiliaohangyedeICON- backBtn" />
    </div>
    <div class="head-box-center">{{ title }}</div>
  </nav>
</template>

<script>
export default {
  name: "CommonHead",
  props: {
    // 是否展示返回键
    showBack: {
      type: Boolean,
      default: true,
    },
    // 标题信息
    title: {
      type: String,
      default: "标题",
    },
  },
  data() {
    return {};
  },
  methods: {
    backHandle() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.common-head-box {
  position: fixed;
  display: flex;
  width: 100vw;
  height: 42px;
  top: 0;
  background: rgba(255, 255, 255, 1);
  border-bottom: 0.5px solid #e4e4e4;
  z-index: 99;

  .head-box-back {
    position: absolute;
    left: 15px;
    align-self: center;
    .backBtn {
      font-size: 13px;
      color: #727272;
    }
  }
  .head-box-center {
    margin: 0 auto;
    align-self: center;
    font-size: 16px;
    color: rgba(85, 85, 85, 1);
  }
}
</style>
