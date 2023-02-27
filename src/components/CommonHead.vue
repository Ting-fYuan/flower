<template>
  <nav>
    <div class="common-head-box">
      <div v-if="showBack" class="head-box-back" @click.stop="backHandle">
        <i class="iconfont icon-yiliaohangyedeICON- backBtn" />
      </div>
      <div class="head-box-center">
        <p>{{ title }}</p>
        <slot name="header-center"></slot>
      </div>
      <div class="head-box-right">
        <slot slot="header-right"></slot>
      </div>
    </div>
    <div class="seize"></div>
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
nav {
  width: 100%;
}
.seize {
  height: 40px;
}
.common-head-box {
  position: fixed;
  display: flex;
  width: 95%;
  padding: 0 2.5%;
  height: 50px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border-bottom: 0.5px solid #e4e4e4;
  z-index: 99;

  .head-box-back {
    .backBtn {
      font-size: 13px;
      color: #727272;
    }
  }
  .head-box-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    p {
      font-size: 16px;
      color: rgba(85, 85, 85, 1);
    }
  }
}
</style>
