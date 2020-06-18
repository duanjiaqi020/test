
<template>
  <div class="content_one">
    <HelloWorld msg="我是主页"></HelloWorld>
    <div class="content_top">
      <div class="content_one_return" @click="back()">
        <img src="..\assets\左箭头.png" alt />
      </div>
      <div class="content_one_article">文章详情</div>
      <div class="clear"></div>
    </div>
    <div class="content_one_title">我是测试标题</div>

    <div class="content_one_editor">
      <div class="content_one_name">作者：管理员</div>
      <div class="content_one_time">2019-05-17 17:13:25</div>
      <div class="clear"></div>
    </div>

    <div class="text1">
      ORACLE
      <span>数据库系统</span>是美国ORACLE公司(甲骨文)提供的以分布式数据库为核心的一组软件产品，是目前最流行的客户/服务器
      (CLIENT/SERVER)或B/S体系结构的数据库之一。比如SilverStream就是基于数据库的一种中间 件。ORACL E数据库是目前世界上使用最为广泛的数据库管理系统，作为一个通用的数据库系统，它具有完整的数据管理功能;作为一个关系数据库，它是一个完备关系的产品;作为分布式数据库它实现了分布式处理功能。但它的所有知识，只要在一种机型上学习了ORACLE知识，便能在各种类型的机器上使用它。
      <br />Oracle数据库最新版本为Oracle Database 12c。Oracle数据库12c引入了一个新的多承租方架构, 使用该架构可轻松部署和管理数据库云。此外,一些创新特性可最大限度 地提高资源使用率和灵活性，如Oracle Multitenant可快速整合多个数据库，而Automatic Data Optimization和Heat Map 能以更高的密度压缩数据和对数据分层。这些独一无二的技术进步再加上在可用性、安全性和大数据支持方面的主要增强，使得Oracle数据库12c成为私有云和公有云部署的理想平台。
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Content",
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
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
}
.text1 > span {
  color: red;
}
</style>