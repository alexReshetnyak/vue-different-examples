import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home/Home.vue";
import store from './store/store';

Vue.use(Router);

const authGuard = {
  beforeEnter: (to, from, next) => {
    store.state.admin.token ? next() : next('/');
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("./components/Dashboard/Dashboard.vue"),
    ...authGuard,
    children: []
  },
  {
    path: "/signin",
    name: "signin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Signin/Signin.vue")
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(/* to, from, savedPosition */) {
    return { x: 0, y: 0 };
  }
});
