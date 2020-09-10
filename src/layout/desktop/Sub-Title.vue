<template>
  <div class="sub-title">
    <template v-for="(item, index) in txt">
      <p :key="new Date().valueOf() + index">
        {{ item }}
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class SubTitle extends Vue {
  @Prop({ type: Array })
  txt!: string[];
}
</script>

<style lang="scss" scoped>
.sub-title {
  padding: 0 45px;
  margin-top: 16px;
  text-align: center;

  p {
    font-family: ArialMT;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 44px;
    letter-spacing: 0px;
    color: #232528;
  }
}
</style>
