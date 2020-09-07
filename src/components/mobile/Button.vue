<template>
  <van-button
    @click="click"
    :class="{
      light: theme === 'light',
      dark: theme === 'dark',
      'long-dark': theme === 'longDark',
      'long-light': theme === 'longLight'
    }"
  >
    <slot></slot>
  </van-button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {
  @Prop({ type: String, default: "light" })
  theme!: "light" | "dark" | "longDark" | "longLight";

  @Emit()
  click() {
    console.log(this.theme);

    //
  }
}
</script>

<style lang="scss" scoped>
.transparent {
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.button-font {
  font-family: DINAlternate-Bold;
  font-size: 0.36rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.02rem;
  color: #246167;
}
.light {
  @extend .transparent;
  @extend .button-font;

  background-image: url("~@/assets/images/btn-light.png");
}

.long-light {
  @extend .transparent;
  @extend .button-font;

  background-image: url("~@/assets/images/button-long-light.png");
}

.long-dark {
  @extend .transparent;
  @extend .button-font;

  background-image: url("~@/assets/images/button-long-dark.png");
}

.dark {
  @extend .transparent;
  @extend .button-font;

  background-image: url("~@/assets/images/btn-dark.png");
}
</style>
