<template>
  <div class="back">
    <!-- 左侧栏 -->
    <div class="menu_left">
      <div class="menu_left_logo">
        <img
          src="data:image/png;base64,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"
          alt
        />
      </div>
      <div class="user_name">11111111111</div>
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!-- 右半部分 -->
    <div class="menu_right">
      <!-- 上侧栏 -->
      <div class="menu_top">
        <div class="menu_top_menu">菜单</div>
        <div class="menu_logout">
          <i class="iconfont icontuichu"></i>
          <div class="menu_top_logout">退出</div>
        </div>
      </div>
      <!-- 主体页面 -->
      <div class="body">
        <el-button class="body_add" type="primary" round>点击增加</el-button>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.back {
}
// 左侧边栏
.menu_left {
  background-color: #545c64;
  width: 200px;
  height: 100%;
  position: fixed;
}
.user_name {
  text-align: center;
  color: #ffffff;
}

.menu_left_logo img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 20px 0 10px 60px;
}
.tac {
  width: 201px;
}
// 上边栏
.menu_top {
  background-color: #ffffff;
  margin-left: 200px;
  height: 41px;
  font-size: 16px;
  color: #409eff;
  padding-top: 20px;
  padding-left: 48px;
  padding-right: 50px;
}
.menu_top_menu {
  float: left;
  border-bottom: 3px solid #409eff;
  padding-bottom: 18px;
}
.menu_logout {
  float: right;
}
.menu_top_logout {
  float: right;
  margin-left: 5px;
}
// body
.menu_right {
  background-color: #f2f2f2;
  height: 100vh;
}
.body {
  margin: 15px;
  margin-left: 215px;
padding: 20px;
  background-color: #ffffff;
}
.body_add {
  float: right;

}
</style>