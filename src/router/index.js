/* eslint-disable no-undef */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Content from"../views/Content.vue";
import Navigation from"../views/Navigation.vue";
import page from"../views/page.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
    path: "/List",
    name: "List",
    component: List
  },{
    path: "/Content",
    name: "Content",
    component: Content
  },{
    path:  "/Navigation",
    name: "Navigation",
    component: Navigation
  },{
    path:  "/page",
    name: "page",
    component: page
  }

];


const router = new VueRouter({
  routes
});

export default router;
