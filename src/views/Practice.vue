<template>
  <div id="111">
    <ul>
      <li
        v-bind:class="item.sex=='男'?'active':'hasError'"
        v-for="(item,index) in items"
        :key="index"
      >{{ item.name }},{{ item.sex }},{{item.age}}</li>
    </ul>
    <div>
      <ul>
        <li>
          <input v-model="form.name">
          <input v-model="form.age">
          <input v-model="form.sex">
          <button @click="handeSubmit">提交</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Practice",
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
  methods: {
    handeSubmit: function() {
      this.items.push(this.form);
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