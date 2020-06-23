import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Content from"./router";
import Navigation from"./router";
import axios from "./static/js/axios.js";
Vue.config.productionTip = false;

 Vue.prototype.$http=axios;//通过this.$http来调用封装好的组件axios
Vue.use(ElementUI);
new Vue({
  router,
  store,
  Content,
  Navigation,
  render: h => h(App)
}).$mount("#app");
