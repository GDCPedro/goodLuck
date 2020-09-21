import { RouteConfig } from "vue-router";

const pcRouter: RouteConfig[] = [
  {
    path: "/pc/index/:asin_id?/:suffix?",
    component: () => import("@/views/desktop/index.vue")
  },
  {
    path: "/pc/thanks",
    component: () => import("@/views/desktop/thanks.vue")
  },
  {
    path: "/pc/draw",
    component: () => import("@/views/desktop/draw.vue")
  },
  {
    path: "/pc/complete",
    component: () => import("@/views/desktop/complete.vue")
  },
  {
    path: "/pc/succeed",
    component: () => import("@/views/desktop/succeed.vue")
  }
];

export default pcRouter;
