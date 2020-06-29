<template>
  <div class="nav">
    <div class="nav_box">
      <div class="nav_box_arrow" @click="back()">
        <img alt src="..\assets\左箭头.png" />
        <div class="nav_box_title">轻松学课程</div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="navList">
      <div class="nav_box_mid">
        <div class="nav_list">方向</div>
        <div
          class="nav_list"
          v-for="(item,index) in directionList"
          :key="index"
          @click="classificationList(item)"
          :class="direction_id==item.direction_id?'nav_list_active':''"
        >{{item.direction_name}}</div>
        <!-- 方向 -->
      </div>
      <div class="box_line"></div>
      <div class="nav_box_mid">
        <div class="nav_list">分类</div>

        <div
          class="nav_list"
          v-for="(items,index) in classification_type"
          :key="index"
          @click="classificationType(items)"
          :class="classification_id==items.classification_id?'nav_list_active':''"
        >{{items.classification_type}}</div>
        <!-- 分类 -->
      </div>
      <div class="nav_body" v-for="(items,index) in list" :key="index" @click="toDetail(items)">
        <div class="nav_body_box">
          <img alt :src="items.total_cover" />

          <div class="nav_body_article">
            <div class="nav_body_content">{{items.total_title}}</div>

            <div class="nav_body_jun">
              <div class="nav_body_writer">{{items.total_author}}</div>
              <div class="nav_body_time">{{items.total_time}}</div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      classification_id: "",
      classification_type: [],
      direction_id: "1",
      total_id: "",
      list: [],
      page: 0,
      size: 10,
      directionList: [
        {
          direction_name: "前端开发",
          direction_id: 1
        },
        {
          direction_name: "后端开发",
          direction_id: 2
        },
        {
          direction_name: "移动开发",
          direction_id: 3
        },
        {
          direction_name: "数据库",
          direction_id: 4
        },
        {
          direction_name: "云计算&大数据",
          direction_id: 5
        },
        {
          direction_name: "运维&测试",
          direction_id: 6
        },
        {
          direction_name: "UI设计",
          direction_id: 7
        }
      ]
    };
    hasNextPage: true;
  },
  mounted() {
    this.contentes();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    handleScroll() {
      if (
        document.body.clientHeight - document.documentElement.scrollTop - 667 <
        200
      ) {
        if (this.hasNextPage == true) {
          this.page++;
          this.hasNextPage = false;
          this.loadList();
        }
      }
    },
   
    classificationList(item) {
      this.direction_id = item.direction_id;
      this.list = [];
      this.page = 0;
      this.contentes(); //点击方向
    },
    classificationType(items) {
      this.classification_id = items.classification_id;
      this.list = [];
      this.page = 0;
      this.loadList(); //点击分类
    },
    toDetail(items) {
      this.$router.push({
        path: "/Content",
        query: {
          total_id: items.total_id
        }
      });
    },

    contentes() {
      let obj = {
        direction_id: this.direction_id
      };
      this.$http
        .post("/api/classification/list", obj)
        .then(res => {
          this.classification_type = res.data.result.data;
          this.classification_id = this.classification_type[0].classification_id;
          this.loadList();
          console.log(this.classification_type);
        })
        .catch(err => {});
    },

    loadList() {
      let sb = {
        direction_id: this.direction_id,
        classification_id: this.classification_id,
        page: this.page,
        size: this.size
      };
      this.$http
        .post("/api/total/list", sb)
        .then(res => {
          let data = res.data.result.data;
          data.length < this.size ? "" : (this.hasNextPage = true);
          this.list = [...this.list, ...data];
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss">
.clear {
  clear: both;
}
.nav_box_arrow img {
  float: left;
  width: 26px;
  position: absolute;
  top: 10px;
  left: 13px;
}
.nav_box_title {
  padding: 10px;
  font-size: 20px;
  text-align: center;
}
.nav_box_mid {
  overflow: auto;
  white-space: nowrap;
}

.nav_list {
  display: inline-block;
  white-space: nowrap;
  padding-left: 20px;
  padding: 10px;
}
.box_line {
  height: 1px;
  background-color: rgba(232, 232, 231, 0.767);
  margin-left: 20px;
  margin-right: 20px;
}
.nav_body_box img {
  width: 98px;
  height: 72px;
  border-radius: 8px;
  float: left;
  margin-left: 20px;
}
.nav_body_content {
  text-align: left;
  margin-top: 10px;
  margin-left: 130px;
}
.nav_body_jun {
  border-bottom: 2px solid #e8e8e8;
  margin-left: 120px;
  font-size: 14px;
  color: #999;
  display: block;
  margin-top: 20px;
  margin-right: 20px;
}

.nav_body_writer {
  float: left;
  margin-left: 10px;
}
.nav_body_time {
  float: right;
}
.nav_list_active {
  color: #f44;
}
</style>