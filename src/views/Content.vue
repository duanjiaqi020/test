
<template>
  <div class="content_one">
    <div class="content_top">
      <div class="content_one_return" @click="back()">
        <img src="..\assets\左箭头.png" alt />
      </div>
      <div class="content_one_article">文章详情</div>
      <div class="clear"></div>
    </div>
    <div class="content_one_title">{{article.total_title}}</div>

    <div class="content_one_editor">
      <div class="content_one_name">{{article.total_author}}</div>
      <div class="content_one_time">{{article.total_time}}</div>
      <div class="clear"></div>
    </div>

    <div class="text1" v-html="article.total_content"></div>
  </div>
</template>

<script>
export default {
  name: "Content",
  components: {},
  data() {
    return {
      total_id: "",
      article: ""
    };
  },
  mounted() {
    this.total_id = this.$route.query.total_id;
    this.contentes();
    // console.log(this.$route.query)
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    contentes() {
      let obj = {
        total_id: this.total_id
      };
      this.$http
        .post("/api/total/detail", obj)
        .then(res => {
          console.log(res);
          this.article = res.data.result.data[0];
        })
        .catch(err => {});
    }
  }
};
</script>

<style>
.clear {
  clear: both;
}
.content_top {
  position: relative;
}

.content_one_return img {
  width: 26px;
  position: absolute;
  top: 10px;
  left: 13px;
}
.content_one_title {
  font-size: 20px;
  font-weight: 700;

  margin-left: 17px;
  margin-top: 10px;
}
.content_one_article {
  padding: 10px;
  font-size: 20px;
  text-align: center;
}
.content_one_editor {
  margin: 10px;
  font-size: 14px;
  color: #aaa4a5;
}

.content_one_name {
  float: left;
  padding: 10px;
}
.content_one_time {
  float: right;
  padding: 10px;
}
.text1 {
  margin: 10px;
  padding: 10px;
  text-align: left;
  line-height: 28px;
}
.text1 img {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-indent: 0em;
}

.text1 > span {
  color: red;
}
</style>