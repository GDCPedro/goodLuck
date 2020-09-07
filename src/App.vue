<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { isPC, autoResize } from "@/utils/index";

@Component({})
export default class Main extends Vue {
  mounted() {
    autoResize();
    this.$nextTick(() => {
      this.setRem();
    });
  }

  setRem() {
    if (!isPC()) {
      // 非PC
      document.getElementsByTagName("html")[0].style.fontSize =
        "13.33333333333333vmin";
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
