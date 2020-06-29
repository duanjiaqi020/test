<template>
  <div id="111">
    <ul>
      <div
        class="list_body"
        v-for="(item,index) in items"
        :key="index"
        v-bind:class="item.sex=='男'?'active':'hasError'"
      >
        <li>
          {{item.grade}}
          {{ item.name }},{{ item.sex }},{{item.age}}
          <button
            @click="handeDelete(index,item)"
          >删除</button>
        </li>
      </div>
    </ul>
    <div>
      <ul>
        <li>
          <input v-model="form.name" />
          <input v-model="form.sex" />
          <input v-model="form.age" />
          <button @click="handeSubmit">提交</button>
          <button @click="grade">一年级</button>
          <button @click="grade2">二年级</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Practice",
  //数据
  data() {
    return {
      items: [
        { name: "张三", age: "16", sex: "男" },
        { name: "李四", age: "18", sex: "男" },
        { name: "王二", age: "18", sex: "女" },
        { name: "小六", age: "26", sex: "女" }
      ],
      active: true,
      index: "hello ",
      form: {
        name: "",
        age: "",
        sex: ""
      }
    };
  },
  //自动运行
  mounted() {
    console.log(JSON.stringify(this.items));
    let nan = [],
      nu = [];
    let zong = 0;
    let pingjun = 0;
    this.items.map((value, index) => {
      console.log(value);
      console.log(index);
      if (value.sex == "男") {
        nan.push(value);
      } else {
        nu.push(value);
      }
      zong = value.age - 0 + zong;
    });
    console.log("平均年龄" + zong / this.items.length);
    console.log("男生：" + nan.length);
    console.log("女生：" + nu.length);
  },
  //方法
  methods: {
    handeSubmit() {
      this.items.push(Object.assign({}, this.form));
    },
    handeDelete(index, item) {
      console.log(item);
      this.items.splice(index, 1);
    },
    grade() {
      this.items.map(v => {
        v.grade = "一年级";
      });

      this.$forceUpdate();
      console.log(this.items);
    },
    grade2() {
      this.items.map(v => {
        v.grade = "二年级";
      });

      this.$forceUpdate();
      console.log(this.items);
    }
  }
};
</script>
<style>
.active {
  color: #3498db;
}
.hasError {
  color: #e74c3c;
}
</style>