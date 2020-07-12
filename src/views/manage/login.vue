<template>
  <div class="login_in">
    <img src="..\..\assets\2023150.jpg" alt />
    <div class="login_top">后台管理系统</div>
    <div class="login_middle">
      <div class="login_middle_in">
        <i class="login_middle_icon iconfont iconfenzu"></i>
        <el-input v-model="subscriber_account" placeholder="请输入账号" class="login_middle_input"></el-input>
      </div>
      <div class="login_middle_in">
        <i class="login_middle_icon iconfont iconsuo"></i>
        <el-input
          v-model="subscriber_password"
          placeholder="请输入密码"
          class="login_middle_input"
          show-password
        ></el-input>
      </div>
      <div class="login_tips">
        <el-checkbox v-model="checked" class="auto_login">自动登录</el-checkbox>
        <div class="forget_password" @click="forgetPassword">忘记密码</div>
      </div>
      <div class="login_button" @click="login()">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscriber_account: "",
      subscriber_password: "",
      checked: true
    };
  },
  mounted() {},
  methods: {
    forgetPassword() {
      this.$router.push("/manage/passwordForget");
    },
    login() {
      if (this.subscriber_account == "") {
        this.$notify.error({
          title: "提示",
          message: "请输入账号"
        });
      } else if (this.subscriber_password == "") {
        this.$notify.error({
          title: "提示",
          message: "请输入密码"
        });
      } else {
        let obj = {
          subscriber_account: this.subscriber_account,
          subscriber_password: this.$md5(this.subscriber_password)
        };
        this.$http
          .post("/api/login/check", obj)
          .then(res => {
            console.log(res);
          })
          .catch(err => {});
      }
    }
  }
};
</script>

<style scoped>
.login_in img {
  height: 100%;
  position: fixed;
  width: 100%;
  object-fit: cover;
}
.login_top {
  position: relative;
  text-align: center;
  z-index: 1;
  padding-top: 120px;
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 60px;
  font-family: cursive;
}
.login_middle {
  margin-top: 20px;
  position: relative;
  width: 640px;
  z-index: 2;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0px auto;
  box-sizing: border-box;
  padding: 0 80px;
}
.login_middle_input >>> .el-input__inner {
  background-color: rgba(0, 0, 0, 0.2);
  padding-left: 50px;
  color: #ffffff;
}
.login_middle_in {
  padding: 60px 0px 0px;
  position: relative;
}
.login_middle_in i {
  position: absolute;
  top: 72px;
  left: 20px;
}
.login_middle_icon {
  color: #ffffff;
}
.auto_login {
  margin-left: 15px;
}
.forget_password {
  float: right;
  color: #fff;
  margin-right: 20px;
}
.login_tips {
  margin-top: 20px;
}
.login_button {
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  -webkit-appearance: none;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.login_button:hover {
  box-shadow: 1px 1px 20px 3px #ffee23;
}
</style>