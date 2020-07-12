import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import md5 from 'js-md5';
import axios from "./static/js/axios.js";
Vue.config.productionTip = false;
Vue.prototype.$md5 = md5;
 Vue.prototype.$http=axios;//通过this.$http来调用封装好的组件axios
Vue.use(ElementUI);
new Vue({
  router,
  store,


  render: h => h(App)
}).$mount("#app");
