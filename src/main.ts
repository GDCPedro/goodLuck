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
/** PC端的全局组件 */
import PCMain from "@/components/desktop/Main.vue";
import PcButton from "@/components/desktop/Pc-Button.vue";
import PCTitle from "@/layout/desktop/Title.vue";
import PcSubTitle from "@/layout/desktop/Sub-Title.vue";
import PcSpecialContainer from "@/layout/desktop/Special-Container.vue";
Vue.component("pc-title", PCTitle);
Vue.component("PCMain", PCMain);
Vue.component("pc-sub-title", PcSubTitle);
Vue.component("pc-special-container", PcSpecialContainer);
Vue.component("pc-button", PcButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
