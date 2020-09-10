import { RouteConfig } from "vue-router";

const pcRouter: RouteConfig[] = [
  {
    path: "/pc/index/:asin_id?/:suffix?",
    component: () => import("@/views/desktop/index.vue")
  }
];

export default pcRouter;
