<template>
  <Button
    @click="handleClick"
    class="pc-button"
    :style="{ width: width + 'px' }"
    type="primary"
  >
    <slot></slot>
  </Button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { Button } from "view-design";

@Component({
  components: {
    Button
  }
})
export default class PcButton extends Vue {
  @Prop()
  width!: number | string;

  @Emit("click")
  handleClick() {
    //
  }
}
</script>

<style lang="scss">
.pc-button {
  border: 0;
  height: 50px;
  background-image: linear-gradient(
      90deg,
      #95c3cd 0%,
      #a4cad0 50%,
      #95c3cd 100%
    ),
    linear-gradient(#342f35, #342f35);
  background-blend-mode: normal, normal;
  box-shadow: 0px 5px 0px 0px rgba(36, 90, 101, 0.5);
  border-radius: 5px;

  font-family: DINAlternate-Bold;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #246167;
}
</style>
