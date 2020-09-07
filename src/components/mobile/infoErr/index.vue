<template>
  <van-dialog
    v-model="show"
    style="width:6rem; background-color: #999;border:0;"
    :showConfirmButton="false"
    :showCancelButton="false"
  >
    <div class="info-err">
      <div class="info-err__x"></div>
      <div class="info-err__txt">Error has occurred</div>
    </div>
  </van-dialog>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class InfoErr extends Vue {
  show = true;
}
</script>

<style lang="scss" scoped>
.info-err {
  background-color: rgba(13, 19, 20, 0.9);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 3.2rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__x {
    width: 0.8rem;
    height: 0.73rem;
    background-image: url("~@/assets/images/err-x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  &__txt {
    margin-top: 0.32rem;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 0.38rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.45rem;
    letter-spacing: 0;
    color: #c7eaf0;
  }
}
</style>
