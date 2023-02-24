<!-- 登录 -->
<template>
  <div class="wrap">
    <header>
      <div class="login_head">
        <div class="head_back" @click="back">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="head_text">登录注册</div>
        <div class="head_option">
          <van-popover
            v-model="showPopover"
            trigger="click"
            :actions="actions"
            placement="bottom-end"
          >
            <template #reference>
              <i class="iconfont icon-caidan" />
            </template>
          </van-popover>
        </div>
      </div>
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
    </header>
    <main>
      <!-- tabs -->
      <van-tabs
        v-model="activeName"
        animated
        :swipeable="true"
        title-active-color="#804E21"
        color="#804E21"
        @click="tabsState"
      >
        <!--登录 -->
        <van-tab title="登录" name="login">
          <!-- 登录模块 -->
          <div class="loginModule module">
            <!-- 登录手机号码 -->
            <div class="form">
              <div class="label" ref="loginMobileL">手机号码</div>
              <input
                v-model="form.loginPhone"
                type="text"
                id="loginMobile"
                @blur="loginBlur"
                @focus="loginFocus"
              />
              <div class="err_msg" ref="login_m_err">{{ err.login_m_err }}</div>
            </div>
            <!-- 登录密码 -->
            <div class="form">
              <div class="label" ref="loginPassL">请输入密码</div>
              <input
                v-model="form.loginPassword"
                type="password"
                id="loginPassword"
                @blur="loginBlur"
                @focus="loginFocus"
              />
              <div class="err_msg" ref="login_p_err">{{ err.login_p_err }}</div>
            </div>
            <!-- 点击登录 -->
            <div class="form">
              <button class="btn" @click="loginSubmit">登录</button>
            </div>
          </div>
        </van-tab>
        <!-- 注册 -->
        <van-tab title="注册" name="register">
          <!-- 注册模块 -->
          <div class="registerModule module">
            <!-- 注册手机号模块 -->
            <div class="form">
              <div class="label" ref="regMobileL">手机号码</div>
              <input
                v-model="form.regPhone"
                type="text"
                id="regMobile"
                @blur="regBlur"
                @focus="regFocus"
              />
              <div class="err_msg" ref="reg_m_err">{{ err.reg_m_err }}</div>
            </div>
            <!-- 注册密码模块 -->
            <div class="form">
              <div class="label" ref="regPassL">请输入密码</div>
              <input
                v-model="form.regPassword"
                type="password"
                id="regPassword"
                @blur="regBlur"
                @focus="regFocus"
              />
              <div class="err_msg" ref="reg_p_err">{{ err.reg_p_err }}</div>
            </div>
            <!-- 注册确认密码模块 -->
            <div class="form">
              <div class="label" ref="regSamePassL">请输入确认密码</div>
              <input
                v-model="form.regSamePass"
                type="password"
                id="regSamePass"
                @blur="regBlur"
                @focus="regFocus"
              />
              <div class="err_msg" ref="reg_cp_err">{{ err.reg_cp_err }}</div>
            </div>
            <!-- 注册按钮模块 -->
            <div class="form">
              <button class="btn" @click="regiaterSubmit">注册</button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </main>
    <footer></footer>
  </div>
</template>

<script>
// 引入logoApi
import { logoSwiper } from "@/api/swiper";
export default {
  name: "LoginView",
  data() {
    return {
      // 两个模块绑定的数据
      form: {
        // 登录手机号
        loginPhone: "",
        // 登录密码
        loginPassword: "",
        // 注册手机号
        regPhone: "",
        // 注册密码
        regPassword: "",
        // 确认密码
        regSamePass: "",
      },
      // 两个模块的错误提示
      err: {
        // 登录手机号格式错误提示
        login_m_err: "",
        // 登录密码错误提示
        login_p_err: "",
        // 注册手机号格式错误提示
        reg_m_err: "",
        // 注册密码错误提示
        reg_p_err: "",
        // 注册确密码错误提示
        reg_cp_err: "",
      },
      // tabs栏切换
      activeName: "login",
      // logo
      logo: "",
      // 菜单是否显示
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [
        { text: "首页", icon: "wap-home-o" },
        { text: "分类", icon: "apps-o" },
        { text: "购物车", icon: "shopping-cart-o" },
        { text: "我的", icon: "contact" },
      ],
    };
  },
  async created() {
    // 获取logo请求
    let res = await logoSwiper(1620);
    this.logo = res.result.s_photos[0].path;
  },
  // 绑定监听事件
  mounted() {
    window.addEventListener("keydown", this.keyEnter);
  },
  // 销毁回车事件
  destroyed() {
    window.removeEventListener("keydown", this.keyEnter, false);
  },
  methods: {
    tabsState(e) {
      if (e == "login") {
        this.$refs.reg_m_err.classList.remove("errChange");
        this.$refs.reg_p_err.classList.remove("errChange");
        this.$refs.reg_cp_err.classList.remove("errChange");
      } else {
        this.$refs.login_m_err.classList.remove("errChange");
        this.$refs.login_p_err.classList.remove("errChange");
      }
    },
    // 登录失焦样式变化
    loginBlur(e) {
      // 添加错误提示
      // e.target.nextElementSibling.classList.add("errChange");
      // 去除错误提示
      // e.target.nextElementSibling.classList.remove("errChange");

      // 判断是哪个输入框
      if (e.target.id == "loginMobile") {
        // 判断是否为空
        if (this.form.loginPhone == "") {
          this.$refs.loginMobileL.classList.remove("labelActive");
          this.err.login_m_err = "手机不能为空";
          e.target.nextElementSibling.classList.add("errChange");
        } else {
          // 电话号码正则
          let reg =
            /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
          // 判断是否为电话号码
          if (!reg.test(this.form.loginPhone)) {
            this.err.login_m_err = "手机格式错误";
            e.target.nextElementSibling.classList.add("errChange");
          } else {
            e.target.nextElementSibling.classList.remove("errChange");
          }
        }
      } else {
        if (this.form.loginPassword == "") {
          this.err.login_p_err = "密码不能为空";
          this.$refs.loginPassL.classList.remove("labelActive");
          e.target.nextElementSibling.classList.add("errChange");
        } else {
          e.target.nextElementSibling.classList.remove("errChange");
        }
      }
    },
    // 登录聚焦样式变化
    loginFocus(e) {
      if (e.target.id == "loginMobile") {
        this.$refs.loginMobileL.classList.add("labelActive");
      } else {
        this.$refs.loginPassL.classList.add("labelActive");
      }
    },
    // 注册失焦样式变化
    regBlur(e) {
      if (e.target.id == "regMobile") {
        if (this.form.regPhone == "") {
          this.$refs.regMobileL.classList.remove("labelActive");
          this.err.reg_m_err = "手机不能为空";
          e.target.nextElementSibling.classList.add("errChange");
        } else {
          // 电话号码正则
          let reg =
            /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
          // 判断是否为电话号码
          if (!reg.test(this.form.regPhone)) {
            this.err.reg_m_err = "手机格式错误";
            e.target.nextElementSibling.classList.add("errChange");
          } else {
            e.target.nextElementSibling.classList.remove("errChange");
          }
        }
      } else if (e.target.id == "regPassword") {
        if (this.form.regPassword == "") {
          this.$refs.regPassL.classList.remove("labelActive");
          this.err.reg_p_err = "密码不能为空";
          e.target.nextElementSibling.classList.add("errChange");
        } else {
          e.target.nextElementSibling.classList.remove("errChange");
        }
      } else {
        if (this.form.regSamePass == "") {
          this.$refs.regSamePassL.classList.remove("labelActive");
          this.err.reg_cp_err = "确认密码不能为空";
          e.target.nextElementSibling.classList.add("errChange");
        } else {
          if (this.form.regPassword != this.form.regSamePass) {
            this.err.reg_cp_err = "密码不匹配";
            e.target.nextElementSibling.classList.add("errChange");
          } else {
            e.target.nextElementSibling.classList.remove("errChange");
          }
        }
      }
    },
    // 注册聚焦样式变化
    regFocus(e) {
      if (e.target.id == "regMobile") {
        this.$refs.regMobileL.classList.add("labelActive");
      } else if (e.target.id == "regPassword") {
        this.$refs.regPassL.classList.add("labelActive");
      } else {
        this.$refs.regSamePassL.classList.add("labelActive");
      }
    },
    // 发送数据去vuex执行登录请求
    loginSubmit() {
      // console.log("submit", values);
      if (this.form.loginPhone == "" && this.form.loginPassword == "") {
        this.err.login_m_err = "手机号不能为空";
        this.err.login_p_err = "密码不能为空";
        this.$refs.login_m_err.classList.add("errChange");
        this.$refs.login_p_err.classList.add("errChange");
      } else if (this.form.loginPassword == "") {
        this.err.login_p_err = "密码不能为空";
        this.$refs.login_p_err.classList.add("errChange");
      } else if (this.form.loginPhone == "") {
        this.err.login_m_err = "手机号不能为空";
        this.$refs.login_m_err.classList.add("errChange");
      }
      const values = {
        modile: this.form.loginPhone,
        password: this.form.loginPassword,
      };

      this.$store.dispatch("loginStore/loginResquest", values);
    },
    // 注册请求
    async regiaterSubmit() {
      if (
        this.form.regPhone == "" &&
        this.form.regPassword == "" &&
        this.form.regSamePass == ""
      ) {
        this.err.reg_m_err = "手机号不能为空";
        this.err.reg_p_err = "密码不能为空";
        this.err.reg_cp_err = "确认密码不能为空";
        this.$refs.reg_m_err.classList.add("errChange");
        this.$refs.reg_p_err.classList.add("errChange");
        this.$refs.reg_cp_err.classList.add("errChange");
      } else if (this.form.regPhone == "" && this.form.regPassword == "") {
        this.err.reg_m_err = "手机号不能为空";
        this.err.reg_p_err = "密码不能为空";
        this.$refs.reg_m_err.classList.add("errChange");
        this.$refs.reg_p_err.classList.add("errChange");
      } else if (this.form.regPhone == "" && this.form.regSamePass == "") {
        this.err.reg_m_err = "手机号不能为空";
        this.err.reg_cp_err = "确认密码不能为空";
        this.$refs.reg_m_err.classList.add("errChange");
        this.$refs.reg_cp_err.classList.add("errChange");
      } else if (this.form.regPassword == "" && this.form.regSamePass == "") {
        this.err.reg_p_err = "密码不能为空";
        this.err.reg_cp_err = "确认密码不能为空";
        this.$refs.reg_p_err.classList.add("errChange");
        this.$refs.reg_cp_err.classList.add("errChange");
      }
      const regValues = {
        modile: this.form.regPhone,
        password: this.form.regPassword,
      };
      this.$store.dispatch("loginStore/registerResquest", regValues);
    },
    // 回车登录
    keyEnter() {
      document.onkeydown = (e) => {
        if (e.key === "Enter") {
          this.loginSubmit();
        }
      };
    },
    // 返回
    back() {
      this.$router.back(1);
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
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
      img {
        max-width: 200px;
        height: 100%;
      }
    }
  }
  // 登录页面主体
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ::v-deep .van-tabs {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .van-tabs__wrap {
        width: 80%;
        // border: 1px solid #000;
        border-radius: 20px;
        .van-tabs__nav {
          background-color: rgba(240, 240, 240, 1);
        }
        .van-tab {
          width: 50%;
          .van-tab__text {
            font-size: 16px;
          }
        }
      }
      .van-tabs__content {
        width: 100%;
        margin-top: 20px;
      }
    }
    .form {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      // 错误提示样式
      .err_msg {
        position: absolute;
        bottom: -15px;
        left: 15%;
        transform: scale(0);
        transform-origin: 50% 0;
        color: #f04645;
      }
      // 错误提示变化样式
      .errChange {
        transform: scale(1);
        z-index: 10;
        transition: all 0.2s ease;
      }
      .label {
        position: absolute;
        top: 50%;
        left: 18%;
        transform: translateY(-50%);
        color: rgba(0, 0, 0, 0.4);
        font-size: 14px;
        transition: all 0.3s ease;
      }
      .labelActive {
        font-size: 12px;
        top: 20%;
        // color: #f04645;
        transition: all 0.2s ease;
        margin-bottom: 10px;
      }
      // 输入框
      input {
        box-sizing: border-box;
        width: 80%;
        height: 60px;
        padding: 20px 10px 10px 8%;
        background-color: rgba(240, 240, 240, 1);
        border: none;
        border-radius: 20px;
        font-size: 16px;
      }
      // 按钮样式
      .btn {
        box-sizing: border-box;
        width: 80%;
        height: 50px;
        // padding: 20px 10px 10px 8%;
        background-color: rgba(240, 240, 240, 1);
        border: none;
        border-radius: 25px;
        font-size: 16px;
      }
    }
  }
  // 登录页面底部
  footer {
  }
}
</style>
