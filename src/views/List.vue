/* eslint-disable vue/valid-template-root */
<template>
  <div class="list">
    <div class="list_top">
      <div class="list_li listBack1" @click="listes()">
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
      <div class="list_body" v-for="(item,index) in listarr" :key="index" @click="bodyLink(item)">
        <img alt :src="item.total_cover" />
        <div class="list_cont">
          <div class="list_title">{{item.total_title}}</div>

          <div class="list_bottom">
            <div class="list_author">{{item.total_author}}</div>

            <div class="list_time">{{item.total_time}}</div>

            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "list",
  components: {},
  data() {
    return {
      listarr: [],
      page: 0,
      size: 20,
      total_id: "",
      hasNextPage: true
    };
  },
  mounted() {
    //mounted页面加载完后自动运行，可以去运行方法，或者改变变量，而不是直接把axios写在这里，
    //this.$http 使用封装好的axios
    this.loadlist();
    //监听滑动事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //监听滑动事件分页
    handleScroll() {
      //文档body的高度-滚动条距离上边的高度-滚动条高度如果小于200则请求下一页
      if (
        document.body.clientHeight - document.documentElement.scrollTop - 667 <
        200
      ) {
        if (this.hasNextPage == true) {
          this.page++;
          this.hasNextPage = false;//避免不断请求新数据
          this.loadlist();
        }
      }
    },
    //跳转分类页面
    listes() {
      this.$router.push({
        path: "/Navigation",
        query: {
          id: "1"
        }
      });
    },
    //详情跳转
    bodyLink(item) {
      console.log(item.total_id);
      this.$router.push({
        path: "/Content",
        query: {
          total_id: item.total_id
        }
      });
    },
    loadlist() {
      let obj = {
        page: this.page,
        size: this.size
      };
      this.$http
        .post("/api/total/list", obj)
        .then(res => {
          let data = res.data.result.data;
          // console.log(res)
          // console.log(res.data.message )
          data.length < this.size ? "" : this.hasNextPage = true;//判断数据长度如果小于size长度的话证明没有下一页了，否则将存在下一页
          this.listarr = [...this.listarr, ...data];//数据合并

          console.log(this.listarr);
        })
        .catch(err => {});
    }
  },

  created() {}
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