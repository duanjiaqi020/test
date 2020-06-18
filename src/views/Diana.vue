<template>
  <div id="example-1">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <textarea v-model="message2" placeholder="add multiple lines"></textarea>
    <p style="white-space: pre-line;">{{ message2 }}</p>
    <br />
    <div style="margin-top:20px;">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div style="margin-top:20px;">
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>----------------------
    <br />
    <div>
      <input v-model="value" />
      <br />
      <span>{{value}}</span>
    </div>
    <br />

    <ul>
      <li v-for="(item,index) in items" :key="index">{{ item.name }},{{ item.age }}</li>
    </ul>
    <br />
    <div v-for="(item,index) in items1" :key="item">{{item }}: {{index }}</div>
    <br />
    <div>
      <button v-on:click="value6 += 1">{{ value6 }}</button>
      <br />
      <button v-on:click="greet('成功',22222)">1111</button>
    </div>
  </div>
</template>

  
  <script type="text/javascript">
export default {
  name: "Diana",
  data() {
    return {
      message: "test",
      message2: "hi",
      message3: "hello word",
      checkedNames: ["Jack", "John"],
      picked: "Two",
      value: "hello word",
      items: [
        { name: "张三", age: "18" },
        { name: "三张", age: "81" }
      ],
      items1: [1, 2, 3, 4, 5, 6],
      value6: 0,
    
    };
  },
  methods: {
    greet: function(a,b) {
      alert(a);
     console.log(b);
    },
    
  }
};
</script>
  <style >
</style>
