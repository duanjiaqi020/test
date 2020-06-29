<template>
  <div class="login_bk">
    <div class="login_top">
      <img class="login_top_img" src="..\assets\login_bg.png" alt />
    </div>
    <div class="login_top_text0">
      <div class="login_top_text">登录</div>
      <div class="login_top_text1">welcome back</div>
    </div>
    <div class="login_mid">
      <div class="login_mid_user">
        <div class="login_mid_username">账号</div>

        <div class="login_mid_username1">
          <input class="login_mid_border" type="text" placeholder="请输入你的手机号或者邮箱 " />
        </div>
      </div>
      <div class="login_mid_user">
        <div class="login_mid_username">密码</div>

        <div class="login_mid_username1">
          <input class="login_mid_border" type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="login_mid_user">
        <div class="login_mid_username">验证码</div>

        <div class="login_mid_username1">
          <input class="login_mid_border" type="text" placeholder="请输入验证码" />
          <div class="code" @click="getCode" v-show="show">点击获取验证码</div>
          <div class="code" v-show="!show">{{count}}s</div>
        </div>
      </div>

      <div class="login_mid_denglu">
        <div class="login_mid_button" button="登录">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      code: "",
      count: "",
      timer: null
    };
  },
  methods: {
    getCode() {
      let codeTime = 60;
      if (this.show) {
        this.show = false;
        this.count = codeTime;
        this.timer = setInterval(() => {
          if (this.count > 0) {
            this.count--;
          } else {
            clearInterval(this.timer);
            this.show = true;
          }
        }, 1000);
      }
    }
  }
};

</script>
<style>
.login_top_img {
  border-bottom: 1px dashed #4fc3f1;
  position: absolute;
  width: 100%;
}
.login_top_text0 {
  color: #ffffff;
  padding-top: 104px;
  position: relative;
}
.login_top_text {
  margin-left: 34px;
  font-size: 30px;
}
.login_top_text1 {
  padding-top: 1px;
  margin-left: 36px;
  font-size: 25px;
}
.login_mid {
  position: relative;
  margin-top: 87px;
}

.login_mid_username {
  font-size: 11px;
  margin-top: 30px;
  padding-left: 38px;
}
.login_mid_username1 {
  margin-top: 20px;
  color: #aeaeae;
  border-bottom: 1px solid #bfbfbf;
  margin-left: 38px;
  margin-right: 38px;
  position: relative;
}
.login_mid_button {
  width: 300px;
  height: 36px;

  background-color: #55c5ff;
  text-align: center;
  margin-top: 30px;
  margin-left: 35px;
  border-radius: 25px;
  color: #fff;
  line-height: 36px;
  box-sizing: border-box;
}
.login_mid_border {
  border: none;
  font-size: 16px;
  color: #aeaeae;
  width: 100%;
  height: 40px;
  line-height: 40px;
  outline-style: none;
}
.login_mid_denglu {
  vertical-align: middle;
}
.clear {
  clear: both;
}
.login_mid_yz {
  text-align: center;
}
.login_mid_input {
  border-radius: 25px;
  box-sizing: border-box;
}
.code {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>