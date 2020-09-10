<template>
  <div class="title">
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Title extends Vue {
  @Prop()
  title!: string;
}
</script>

<style lang="scss" scoped>
.title {
  // padding: 0 0.25rem;
  text-align: center;

  h3 {
    text-shadow: #fff 2px 0 20px;
    font-family: DINCondensed-Bold;
    font-size: 58px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 80px;
    letter-spacing: 3px;
    color: #2f2a30;
    // box-shadow: 0px 6px 3px 0px rgba(0, 47, 72, 0.3);
  }
}
</style>
