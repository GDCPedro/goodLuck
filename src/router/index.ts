import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import pcRouter from "./pc";
import { isPC } from "@/utils/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...pcRouter,
  {
    path: "/",
    redirect: isPC() ? "/pc/index" : "/index"
  },
  {
    path: "/index/:asin_id?/:suffix?",
    name: "index",
    component: () => import("@/views/mobile/index.vue"),
    beforeEnter: (to, from, next) => {
      if (isPC()) {
        return next({
          path: `/pc${to.path}`
        });
      }
      next();
    }
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

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  document.getElementById("app")!.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  next();
});
export default router;
