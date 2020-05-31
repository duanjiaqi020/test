
<template>
  <div class="page_bk">
    <div class="page_top">
      <img class="page_top_img" alt src="..\assets\背景6.png" />
      <div class="page_top_my">
        <div class="page_top_set">
          <i class="iconfont iconshezhi"></i>
          <i class="iconfont iconlingdang"></i>
        </div>
        <div>
          <div class="page_avatar">
            <img class="page_avatar_a" alt src="..\assets\QQ图片20200530182319.jpg" />
          </div>
          <div class="page_username">智慧小千库</div>
          <div class="page_homepage">个人主页 ></div>
        </div>
      </div>
    </div>
    <div class="page_mid">
      <div class="page_mid_img">
        <img class="page_min_img_wallet" src="..\assets\钱包.png" alt />
        <div class="page_min_img_notes">我的账户</div>
      </div>
      <div class="page_mid_img">
        <img class="page_min_img_wallet" src="..\assets\红包.png" alt />
        <div class="page_min_img_notes">我的红包</div>
      </div>
      <div class="page_mid_img">
        <img class="page_min_img_wallet" src="..\assets\认证成功.png" alt />
        <div class="page_min_img_notes">认证中心</div>
      </div>
      <div class="page_mid_img">
        <img class="page_min_img_wallet" src="..\assets\空间.png" alt />
        <div class="page_min_img_notes">我的动态</div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="page_down">
      <div class="page_down_hot">
        <div class="page_down_hotpop">热门服务</div>
        <div class="page_mid2">
          <div class="page_mid_img">
            <img class="page_min_img_wallet" src="..\assets\钱包.png" alt />
            <div class="page_min_img_notes">我的账户</div>
          </div>
          <div class="page_mid_img">
            <img class="page_min_img_wallet" src="..\assets\红包.png" alt />
            <div class="page_min_img_notes">我的红包</div>
          </div>
          <div class="page_mid_img">
            <img class="page_min_img_wallet" src="..\assets\认证成功.png" alt />
            <div class="page_min_img_notes">认证中心</div>
          </div>
          <div class="page_mid_img">
            <img class="page_min_img_wallet" src="..\assets\空间.png" alt />
            <div class="page_min_img_notes">我的动态</div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      
      <div class="page_down_hot">
        <div class="page_down_hotpop">设置与反馈</div>
         <div class="page_mid2">
          <div class="page_mid_img">
            <img class="page_min_img_wallet" src="..\assets\钱包.png" alt />
            <div class="page_min_img_notes">我的11账户</div>
          </div>
          <div class="page_mid_img">
            <img class="page_min_img_wallet" src="..\assets\红包.png" alt />
            <div class="page_min_img_notes">我的红包</div>
          </div>
          <div class="page_mid_img">
            <img class="page_min_img_wallet" src="..\assets\认证成功.png" alt />
            <div class="page_min_img_notes">认证中心</div>
          </div>
        
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <div class="page_bottom"></div>
  </div>
</template>

<script>
export default {
  name: "page"
};
</script>

<style>
.page_bk {
  font-size: 14px;
}
.page_top {
  color: #ffffff;
}
.page_top_img {
  position: absolute;
  width: 100%;
}
.page_avatar img {
  height: 81px;
  width: 81px;
}
.page_top_my {
  position: relative;
}
.page_top_set {
  padding: 17px 12px;
  text-align: right;
  margin-bottom: 13px;
}
.page_top_set i {
  font-size: 20px;
  margin-left: 12px;
}
.page_avatar {
  padding-left: 22px;
}
.page_avatar_a {
  float: left;
  border: 2px solid #fff;
  border-radius: 50%;
}
.page_username {
  margin-left: 115px;
  font-size: 18px;
  margin-bottom: 13px;
  padding-top: 13px;
}
.page_homepage {
  margin-left: 13px;
  font-size: 12px;
  background: #e64062;
  display: inline-block;
  padding: 7px 11px;
  border-radius: 18px;
}
.page_mid {
  position: absolute;
  background-color: #fff;
  height: 100px;
  width: 355px;
  border-radius: 15px;
  margin: 22px auto 0;
  left: 0;
  right: 0;
  box-shadow: 0px 13px 19px #d8d8d8;
}
.page_mid_img {
  width: 25%;
  text-align: center;
  float: left;
  padding: 20px 0;
  box-sizing: border-box;
}
.page_min_img_wallet {
  width: 30px;
}

.page_min_img_notes {
  color: rgba(167, 166, 166, 0.5);
}
.clear {
  clear: both;
}
.page_down_hot {
  padding: 0 16px;
}
.page_down {
  margin-top: 150px;
}
.page_down_hotpop {
  padding-left: 10px;
  border-left: 5px solid #f44;
}
.page_mid2 {

}
</style>