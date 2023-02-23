<!-- 登录 -->
<template>
  <div class="wrap">
    <header>
      <div class="login_head">
        <div class="head_back"><i class="iconfont icon-zuojiantou"></i></div>
        <div class="head_text">登录注册</div>
        <div class="head_option"><i class="iconfont icon-caidan"></i></div>
      </div>
      <div class="logo"></div>
    </header>
    <main>
      <van-form @submit="onSubmit" label-align="right" :show-error="false">
        <div class="from">
          <div class="label">账号</div>
          <van-field
            v-model="username"
            name="账号"
            placeholder="请输入账号"
            :rules="[{ required: true, message: '请填写账号' }]"
          />
        </div>
        <div class="from">
          <div class="label">密码</div>
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </div>

        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  async created() {},
  methods: {
    // 发送数据去vuex执行登录请求
    onSubmit(values) {
      // console.log("submit", values);
      this.$store.dispatch("loginStore/loginResquest", values);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px;
  // 登录页面头部
  header {
    .login_head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 18px;
      }
      .head_back {
      }
      .head_text {
        font-size: 16px;
        line-height: 40px;
      }
      .head_option {
      }
    }
    .logo {
      margin: 150px 0;
    }
  }
  // 登录页面主体
  main {
    ::v-deep .van-form {
      .from {
        margin-bottom: 30px;
        .label {
          font-size: 13px;
          margin-bottom: 10px;
        }
        .van-cell {
          position: relative;
          overflow: initial;
          padding: 0;
          .van-cell__value {
            .van-field__body {
            }
            .van-field__error-message {
              position: absolute;
              bottom: -100%;
              left: 0;
            }
          }
        }
      }
    }
  }
  // 登录页面底部
  footer {
  }
}
</style>
