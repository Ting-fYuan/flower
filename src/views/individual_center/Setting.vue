<!-- 设置页面 -->
<template>
  <div class="wrap">
    <!-- 头部 -->
    <com-head title="账号信息"></com-head>
    <div class="SettingPage">
      <div class="PersonResource" @click="modal">
        <div class="userInfo">
          <div class="user">
            <div class="avatar">
              <van-image
                round
                lazy-load
                :src="
                  (info.header_img ?? '') === ''
                    ? defaultAvatar
                    : info.header_img
                "
              />
            </div>
            <div class="info">
              <span class="nikeName">{{ info.name }}</span>
              <p class="mobile">手机号： {{ info.phone }}</p>
            </div>
          </div>
          <div class="icon">
            <van-icon name="arrow" size="50" />
          </div>
        </div>
      </div>
      <div class="ModifyPassword">
        <div class="pass">
          <p class="passInfo">修改密码</p>
          <div class="icon">
            <van-icon name="lock" color="#9F92FF" size="100" />
            <van-icon name="arrow" size="50" />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <button class="btn">退出登录</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SettingView",
  data() {
    return {
      isShow: false,
      // 用户信息
      info: {},
      // 默认头像
      defaultAvatar:
        "https://img2.baidu.com/it/u=3072027427,2673781637&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    };
  },
  created() {
    this.info = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(this.info);
  },
  methods: {
    modal() {
      this.$router.push({
        name: "personalInfo",
        params: {
          routerType: "ccc",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  // background: rgba(233, 236, 240, 1);
  .SettingPage {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transform: translateY(1vh);
    padding: 20px;
    .PersonResource {
      width: 100%;
      height: 70px;
      border-radius: 15px;
      margin-bottom: 10px;
      background: rgba(233, 236, 240, 1);
      display: flex;
      align-content: center;
      cursor: pointer;
      .userInfo {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        .user {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          height: 40px;
          .avatar {
            width: 50px;
            height: 50px;
            .van-image {
              width: 100%;
              height: 100%;
            }
          }
          .info {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 5vw;
            .nikeName {
              font-size: 20px;
              color: #000;
              font-weight: 500;
              font-family: "MiSans", "Blackbody";
            }
            .mobile {
              font-size: 15px;
              font-family: "MiSans", "Blackbody";
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
    .ModifyPassword {
      width: 100%;
      height: 70px;
      border-radius: 15px;
      background: rgba(233, 236, 240, 1);
      display: flex;
      justify-content: center;
      align-content: center;
      margin-bottom: 10px;
      cursor: pointer;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .pass {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
      }
      p {
        font-size: 18px;
        color: #000;
        font-weight: 500;
        font-family: "MiSans", "Blackbody";
      }
    }
    // .btn {
    //   position: fixed;
    //   bottom: 5vh;
    //   left: 0;
    //   width: 100%;
    //   height: 60px;
    //   line-height: 60px;
    //   border-radius: 25px;
    //   background: rgba(233, 236, 240, 1);
    //   display: flex;
    //   justify-content: center;
    //   align-content: center;
    //   border: none;
    //   font-size: 18px;
    //   color: #000;
    //   font-weight: 500;
    //   font-family: "MiSans", "Blackbody";
    //   cursor: pointer;
    // }
  }
  footer {
    width: 100%;
    position: fixed;
    bottom: 3vh;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      width: 80%;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      background: rgba(233, 236, 240, 1);
      display: flex;
      justify-content: center;
      align-content: center;
      border: none;
      font-size: 18px;
      color: #000;
      font-weight: 500;
      font-family: "MiSans", "Blackbody";
      cursor: pointer;
    }
  }
}
</style>
