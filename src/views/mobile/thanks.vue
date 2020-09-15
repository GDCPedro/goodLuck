<template>
  <Main>
    <div class="thanks">
      <Title
        :title="title"
        style="font-size: 0.8rem; letter-space: 0.08rem;"
      ></Title>
      <sub-title :txt="subTitle"></sub-title>

      <div style="padding: 0 0.28rem;">
        <special-container class="thanks-main">
          <div class="thanks-main__content">
            <div class="img-wrapper">
              <img :src="okImg" alt="" />
            </div>
            <h3>THANKS!</h3>
            <footer>
              <p>You now have a 2-year warranty on your product.</p>
              <p>Please check your email for con- firmation.</p>
            </footer>
          </div>
        </special-container>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
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
.thanks {
  min-height: 100%;
  &-main {
    padding: 0.2rem;
    margin-top: 0.24rem;

    &__content {
      background-color: #fff;
      border-radius: 0.3rem;
      padding: 1rem 0.72rem;

      .img-wrapper {
        width: 1.5rem;
        height: 1.5rem;
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
        margin-top: 0.32rem;
        display: block;
        height: 0.28rem;
        line-height: 0.28rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.36rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.5rem;
        letter-spacing: 0;
        color: #246167;
      }

      footer {
        margin-top: 1rem;
        font-family: PingFangSC-Medium;
        font-size: 0.32rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.45rem;
        letter-spacing: 0;
        color: #246167;
      }
    }
  }
}
</style>
