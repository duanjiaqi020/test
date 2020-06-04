<template>
  <div class="login_bk">
    <div class="login_top">
      <img class="login_top_img" src="..\assets\login_bg.png" alt />
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
      <div class="login_mid_denglu">
        <div class="login_mid_button" button="登录">登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login"
};
</script>
<style>
.login_top {
  height: 246px;
}
.login_top_img {
  position: absolute;
  width: 100%;
  border-bottom: 1px dashed #4fc3f1;
}
.login_top_text {
  position: relative;
  padding-top: 104px;
  margin-left: 34px;
  font-size: 30px;
  color: #ffffff;
}
.login_top_text1 {
  position: relative;
  padding-top: 1px;
  margin-left: 36px;
  font-size: 25px;
  color: #ffffff;
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
    outline-style: none ;
}


</style>