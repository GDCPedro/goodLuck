import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/index.scss";

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
Vue.use(ViewUI);

/** 注册全局自定义组件 */
import Button from "@/components/mobile/Button.vue";
import Main from "@/components/mobile/Main.vue";
import Title from "@/layout/mobile/Title.vue";
import SubTitle from "@/layout/mobile/Sub-Title.vue";
import SpecialContainer from "@/layout/mobile/Special-Container.vue";
Vue.component("Button", Button);
Vue.component("Main", Main);
Vue.component("Title", Title);
Vue.component("sub-title", SubTitle);
Vue.component("special-container", SpecialContainer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
