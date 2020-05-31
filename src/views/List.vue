/* eslint-disable vue/valid-template-root */
<template>
  <div class="list">
    <div class="list_top">
      <div class="list_li listBack1">
        <img alt src="..\assets\icon_android.png" />
        <div>Android攻城狮</div>
      </div>
      <div class="list_li listBack2">
        <img alt src="..\assets\icon_ios.png" />
        <div>Ios攻城狮</div>
      </div>
      <div class="list_li listBack3">
        <img alt src="..\assets\icon_web.png" />
        <div>Web前端攻城狮</div>
      </div>
      <div class="list_li listBack4">
        <img alt src="..\assets\icon_java.png" />
        <div>后台攻城狮</div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="bottom">
      <div class="list_body">
        <img alt src="..\assets\QQ图片20200513112402.png" />
        <div class="list_cont">
          <div class="list_title">测试标题</div>

          <div class="list_bottom">
            <div class="list_author">作者：管理员</div>

            <div class="list_time">2018-05-19 15:37:46</div>

            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
     <div class="list_body">
        <img alt src="..\assets\QQ图片20200513112402.png" />
        <div class="list_cont">
          <div class="list_title">测试标题</div>

          <div class="list_bottom">
            <div class="list_author">作者：管理员</div>

            <div class="list_time">2018-05-19 15:37:46</div>

            <div class="clear"></div>
          </div>
        </div>
      </div>
        <div class="list_body">
        <img alt src="..\assets\QQ图片20200513112402.png" />
        <div class="list_cont">
          <div class="list_title">测试标题</div>

          <div class="list_bottom">
            <div class="list_author">作者：管理员</div>

            <div class="list_time">2018-05-19 15:37:46</div>

         
          </div>
        </div>
      </div>
        <div class="list_body">
        <img alt src="..\assets\QQ图片20200513112402.png" />
        <div class="list_cont">
          <div class="list_title">测试标题</div>

          <div class="list_bottom">
            <div class="list_author">作者：管理员</div>

            <div class="list_time">2018-05-19 15:37:46</div>

            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>

   
  
</template>

<script>
export default {
  name: "list"
};
</script>
<style lang="scss">
.list {
  padding: 10px;
  background-color: rgb(228, 228, 228);
}
.list_li {
  width: 48%;
  float: left;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
}
.list_li:nth-child(even) {
  float: right;
}
.clear {
  clear: both;
}
.list img {
  text-align: center;
  margin-bottom: 10px;
  height: 70px;
  
}

.listBack1 {
  background: #b3e8c4;
  color: #55cd7d;
}
.listBack2 {
  background: #b2ebef;
  color: #53d4dc;
}
.listBack3 {
  background: #ffdfc1;
  color: #ff7e0a;
}
.listBack4 {
  background: #ff7db5;
  color: #ff0d75;
}
.list_body img {
  height: 100px;
  float: left;
  width: 130px;
  text-align: center;
  border-radius: 10px;
}
.list_cont {
  margin-left: 140px;
  font-size: 14px;
  border-bottom: 1px solid red;
}
.list_bottom {
  margin-top: 40px;
  color: #515053be;
}
.list_author {
  float: left;
}
.list_time {
  float: right;
}
</style>