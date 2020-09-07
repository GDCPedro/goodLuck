<template>
  <div class="special-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SpecialContainer extends Vue {}
</script>

<style lang="scss" scoped>
.special-container {
  width: 100%;
  background-image: linear-gradient(
      90deg,
      #657f91 30%,
      #627c8f 50%,
      #5e788b 100%
    ),
    linear-gradient(#c40f15, #c40f15);
  background-blend-mode: normal, normal;
  box-shadow: 0 0.08rem 0.1rem 0 rgba(0, 0, 0, 0.28);
  border-radius: 0.5rem;
  padding: 0.1rem;
  // opacity: 0.5;
  // margin-top: 0.24rem;
}
</style>
