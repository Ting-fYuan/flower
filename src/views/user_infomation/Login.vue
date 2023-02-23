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
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="账号"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
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
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
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
  main {
  }
  footer {
  }
}
</style>
