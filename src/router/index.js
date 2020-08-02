/* eslint-disable no-undef */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Content from"../views/Content.vue";
import Navigation from"../views/Navigation.vue";
import page from"../views/page.vue";
import Login from"../views/Login.vue";
import Diana from"../views/Diana.vue";
import Practice from"../views/Practice.vue";
import ccccc from"../views/ccccc.vue";
import manageLogin from"../views/manage/login.vue";
import passwordForget from"../views/manage/passwordForget";
import manage from"../views/manage/manage.vue";
Vue.use(VueRouter)

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
  },{
    path:  "/login",
    name: "Login",
    component: Login
  },{
    path:  "/Diana",
    name: "Diana",
    component: Diana
  },{
    path: "/Practice",
    name: "Practice",
    component: Practice
  },{
    path: "/ccccc",
    name: "ccccc",
    component: ccccc
  },{
    path:"/manage/login",
    name:"manageLogin",
    component:manageLogin
  },{
    path:"/manage/passwordForget",
    name:"passwordForget",
    component:passwordForget
  },{
    path:"/manage/manage",
    name:"manage",
    component:manage
  }


];


const router = new VueRouter({
  routes
});

export default router;
