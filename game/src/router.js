import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home/Home.vue";
import MainDashboard from "./components/Dashboard/Main.vue";
import AddPosts from "./components/Dashboard/AddPosts.vue";
import PostList from "./components/Dashboard/PostList.vue";

import store from "./store/store";

Vue.use(Router);

const authGuard = {
  beforeEnter: (to, from, next) => {
    // store.state.admin.token ? next() : next("/");

    const redirect = () => {
      if (store.state.admin.token) {
        to.path === "/signin" ? next("/dashboard") : next();
      } else {
        to.path === "/signin" ? next() : next("/");
      }
    };

    if (store.state.admin.refreshLoading) {
      // * watch for store changes
      store.watch(
        (state, getters) => getters["admin/refreshLoading"],
        () => redirect()
      );
    } else {
      redirect();
    }
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
    component: () => import("./components/Dashboard/Dashboard.vue"),
    ...authGuard,
    children: [
      { path: "/", name: "dashboard", component: MainDashboard },
      { path: "add_posts", component: AddPosts },
      { path: "post_list", component: PostList }
    ]
  },
  {
    path: "/post/:id",
    component: () => import("./components/Post/Post.vue")
  },
  {
    path: "/signin",
    name: "signin",
    ...authGuard,
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
