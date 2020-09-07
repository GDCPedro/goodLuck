import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index/:asin_id/:suffix",
    name: "index",
    component: () => import("@/views/mobile/index.vue")
  },
  {
    path: "/draw",
    name: "draw",
    component: () => import("@/views/mobile/draw.vue")
  },
  {
    path: "/thanks",
    name: "thanks",
    component: () => import("@/views/mobile/thanks.vue")
  },
  {
    path: "/succeed",
    name: "succeed",
    component: () => import("@/views/mobile/succeed.vue")
  },
  {
    path: "/complete",
    name: "complete",
    component: () => import("@/views/mobile/complete.vue")
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("@/views/mobile/policy.vue")
  }
];

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0);
//   next();
// });

export default router;
