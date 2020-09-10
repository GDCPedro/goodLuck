<template>
  <div class="special-container">
    <div class="special-container__slot">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SpecialContainer extends Vue {}
</script>

<style lang="scss" scoped>
.special-container {
  padding: 10px;
  width: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(54, 49, 55, 0.5) 30%,
      rgba(75, 68, 76, 0.5) 50%,
      rgba(54, 49, 55, 0.5) 100%
    ),
    linear-gradient(rgba(54, 49, 55, 0.3), rgba(75, 68, 76, 0.3));
  background-blend-mode: normal, normal;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.28);
  border-radius: 50px;

  &__slot {
    padding: 40px;
    width: 100%;
    border-radius: 50px;
    background-color: #fff;
  }
}
</style>
