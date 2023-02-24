<!-- 设置 -->
<template>
  <div class="SettingPage">
    <com-head title="设置"></com-head>
    <div class="PersonResource"><p>个人资料</p></div>
    <div class="ModifyPassword"><p>修改密码</p></div>
    <button>退出</button>
  </div>
</template>

<script>
export default {
  name: "SettingView",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.SettingPage {
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: rgba(233, 236, 240, 1);
  padding-top: 42px;
  div {
    display: flex;
    align-items: center;
    margin: 6px auto;
    width: 365px;
    height: 60px;
    border-radius: 5px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    p {
      padding-left: 24px;
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
</style>
