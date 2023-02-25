<!-- 设置页面 -->
<template>
  <div class="wrap">
    <!-- 头部 -->
    <com-head title="设置"></com-head>
    <div class="SettingPage">
      <div class="PersonResource" @click="modal">
        <p>个人资料</p>
        <van-icon name="arrow" size="40" />
      </div>
      <div class="ModifyPassword">
        <p>修改密码</p>
        <van-icon name="arrow" size="40" />
      </div>
      <button>退出</button>
    </div>
    <!-- 模态框 -->
    <div class="model">
      <div class="modelHead"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingView",
  data() {
    return {
      isShow: false,
      // 信息绑定
      info: {
        nikeName: "",
        phone: "",
        sex: "",
        birthday: "",
      },
    };
  },
  methods: {
    modal() {},
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: rgba(233, 236, 240, 1);
  .SettingPage {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transform: translateY(7vh);
    div {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      width: 365px;
      height: 60px;
      border-radius: 5px;
      opacity: 1;
      background: rgba(255, 255, 255, 1);
      padding: 0 24px;
      p {
        width: 56px;
        height: 20px;
        line-height: 20px;
        opacity: 1;
        color: rgba(85, 85, 85, 1);
        font-size: 14px;
        font-weight: 400;
        font-family: "PingFang SC";
        text-align: left;
      }
    }
    button {
      margin-top: 50px;
      width: 150px;
      height: 30px;
      border-radius: 20px;
      opacity: 1;
      background: rgba(136, 78, 34, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      font-weight: 400;
      font-family: "PingFang SC";
    }
  }
  .model {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
  }
}
</style>
