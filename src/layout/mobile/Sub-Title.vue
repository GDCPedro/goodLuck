<template>
  <div class="sub-title" :class="{ center: txt.length === 1 }">
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
.center {
  text-align: center;
}

.sub-title {
  padding: 0 0.45rem;
  margin-top: 0.16rem;
  // text-align: center;

  p {
    // text-align: justify;
    margin-top: 0.08rem;
    font-family: ArialMT;
    font-size: 0.32rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.44rem;
    letter-spacing: 0;
    color: #232528;
  }
}
</style>
