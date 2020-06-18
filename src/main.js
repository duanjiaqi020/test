import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Content from"./router";
import Navigation from"./router";
import axios from "axios";
Vue.config.productionTip = false;

Vue.prototype.$http=axios;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  Content,
  Navigation,
  render: h => h(App)
}).$mount("#app");
