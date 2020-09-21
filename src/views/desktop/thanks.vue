<template>
  <PCMain>
    <div class="pc-thanks">
      <pc-title :title="title"></pc-title>
      <pc-sub-title :txt="subTitle"></pc-sub-title>

      <pc-special-container class="pc-thanks-main">
        <div class="pc-thanks-main__content">
          <div class="img-wrapper">
            <img :src="okImg" alt="" />
          </div>
          <h3>THANKS!</h3>
          <footer>
            <p>You now have a 2-year warranty on your product.</p>
            <p>Please check your email for confirmation.</p>
          </footer>
        </div>
      </pc-special-container>
    </div>
  </PCMain>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({})
export default class Thanks extends Vue {
  @State COMPANY_NAME!: string;

  title = "REGISTER TO EXTEND YOUR WARRANTY TO 2 YEARS";

  get subTitle() {
    return [
      `Every ${this.COMPANY_NAME} product comes with a 1-year warranty and the
      option to extend it by 1 additional year!`
    ];
  }

  get okImg() {
    return require("@/assets/images/ok-circle.png");
  }
}
</script>

<style lang="scss" scoped>
.pc-thanks {
  min-height: 100%;

  &-main {
    width: 1000px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 40px;

    &__content {
      background-color: #fff;
      border-radius: 0.3rem;
      padding: 1rem 0.72rem;

      .img-wrapper {
        width: 130px;
        height: 130px;
        margin-left: 50%;
        transform: translateX(-50%);

        > img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      h3 {
        width: 100%;
        text-align: center;
        margin-top: 22px;
        font-family: ArialMT;
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 0px;
        color: #246167;
      }

      footer {
        margin-top: 38px;
        width: 100%;
        text-align: center;
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
}
</style>
