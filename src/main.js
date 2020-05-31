import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Content from"./router";
import Navigation from"./router";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Content,
  Navigation,
  render: h => h(App)
}).$mount("#app");
