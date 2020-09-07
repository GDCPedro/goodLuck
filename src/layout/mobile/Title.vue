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
  padding: 0 0.25rem;
  text-align: center;

  h3 {
    line-height: 0.8rem;
    padding: 0 0.25rem;
    font-family: DINCondensed-Bold;
    font-size: 0.58rem;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0.06rem;
    color: #2f2a30;
    text-shadow: #fff 0.02rem 0 0.2rem;
  }
}
</style>
