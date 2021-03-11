import Vue from "vue";
import VueRouter from "vue-router";

import booksRoutes from "./books";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import(/* webpackChunkName: "form" */ "@/views/Form.vue"),
  },
  ...booksRoutes,
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

// eslint-disable-next-line no-unused-vars
// router.beforeEach((to, from, next) => {
//   // add global authentication for user; next(false) aborts or next({path: '/login'})
//   const user = getUser();

//   if (to.name === "home" || isUserAuth(user)) {
//     next();
//   } else {
//     next({ name: "home" });
//   }
// });

export default router;
