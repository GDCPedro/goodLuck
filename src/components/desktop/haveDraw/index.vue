<template>
  <Modal
    v-model="show"
    :mask-closable="false"
    :closable="false"
    :footer-hide="true"
    class="new-draw"
  >
    <pc-special-container style="padding: 20px;">
      <div class="new-draw__inner">
        <h3>YOU HAVE A LUCKY DRAW</h3>
        <p>Whether to participate or not</p>
        <footer>
          <Button @click="handleNo">NO</Button>
          <Button style="width: 2.6rem;" theme="dark" @click="handleYes"
            >YES</Button
          >
        </footer>
      </div>
    </pc-special-container>
  </Modal>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
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

<style lang="scss">
.new-draw {
  background-color: transparent;
  width: 600px;
  text-align: center;

  .ivu-modal-body {
    padding: 0;
    border-radius: 30px;
  }

  &__inner {
    font-family: PingFangSC-Semibold;
    background-color: #ffffff;
    border-radius: 30px;
    padding-top: 80px;
    padding-bottom: 40px;

    h3 {
      font-family: PingFangSC-Semibold;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      color: #246167;
    }

    p {
      font-family: ArialMT;
      font-size: 26px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 45px;
      letter-spacing: 0px;
      color: #246167;
    }
  }
}
</style>
