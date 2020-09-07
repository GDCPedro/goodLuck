<template>
  <van-dialog
    v-model="show"
    :showConfirmButton="false"
    :showCancelButton="false"
    class="new-draw"
  >
    <special-container style="padding: 0.2rem;">
      <div class="new-draw__inner">
        <h3>YOU HAVE A LUCKY DRAW</h3>
        <p>Whether to participate or not</p>
        <footer>
          <Button
            style="margin-right: 0.24rem; width: 2.6rem;"
            @click="handleNo"
            >NO</Button
          >
          <Button style="width: 2.6rem;" theme="dark" @click="handleYes"
            >YES</Button
          >
        </footer>
      </div>
    </special-container>
  </van-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import newHaveDraw from "@/components/mobile/haveDraw/index";
import router from "@/router";

@Component({})
export default class HaveDraw extends Vue {
  show = true;

  handleNo() {
    newHaveDraw.close();
    router.push("/thanks");
  }

  handleYes() {
    router.push("/draw");
    newHaveDraw.close();
  }
}
</script>

<style lang="scss" scoped>
.new-draw {
  background-color: transparent;
  width: 6.9rem;
  text-align: center;

  &__inner {
    font-family: PingFangSC-Semibold;
    background-color: #ffffff;
    border-radius: 0.3rem;
    padding-top: 0.8rem;
    padding-bottom: 0.4rem;

    h3 {
      font-size: 0.38rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.5rem;
      letter-spacing: 0;
      color: #246167;
    }

    p {
      margin-top: 0.4rem;
      margin-bottom: 0.64rem;
      font-size: 0.32rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.45rem;
      letter-spacing: 0;
      color: #246167;
    }
  }
}
</style>
