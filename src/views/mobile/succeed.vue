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
            <h3>YOU HAVE SUCCESSFULLY SUBMITTED</h3>
            <h4>
              We will review your submission within 3-5 days. Please check your
              email for more information.
            </h4>
            <div class="long-questions">
              <!-- <div class="long-questions__bg"></div> -->
              <div class="long-questions__txt">
                If you have any questions, please contact us via email at
                Support@meetdeals.com
              </div>
            </div>

            <div class="contact-email">
              <div>Contact Email: {{ EMAIL }}</div>
            </div>
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
  @State EMAIL!: string;

  title = "LUCKY DRAW TITLE";

  get subTitle() {
    return [`Welcome to the lucky draw Good luck`];
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
      padding-top: 1rem;
      padding-bottom: 1rem;

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
        margin-top: 0.8rem;
        display: block;
        line-height: 0.5rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.36rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.5rem;
        letter-spacing: 0;
        color: #246167;
        padding: 0 0.72rem;
      }

      h4 {
        padding: 0 0.72rem;
        width: 100%;
        text-align: center;
        margin-top: 0.48rem;
        font-family: PingFangSC-Medium;
        font-size: 0.32rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.45rem;
        letter-spacing: 0;
        color: #246167;
      }

      .long-questions {
        padding: 0 0.16rem;
        width: 100%;
        margin-top: 0.56rem;

        background-image: linear-gradient(
            90deg,
            #ebeaeb 30%,
            #ececed 50%,
            #ebeaeb 100%
          ),
          linear-gradient(rgba(196, 15, 21, 0.1), rgba(196, 15, 21, 0.1));
        background-blend-mode: normal, normal;
        box-shadow: 0 0.08rem 0.1rem 0 rgba(0, 0, 0, 0.028);

        &__txt {
          width: 100%;
          text-align: center;
          line-height: 0.9rem;
          font-family: PingFangSC-Semibold;
          font-size: 0.3rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0;
          color: #246167;
        }
      }

      .contact-email {
        width: 100%;
        margin-top: 0.48rem;

        > div {
          background-color: #e6f1f3;
          border-radius: 0.1rem;
          height: 100%;
          line-height: 0.9rem;
          text-align: center;
          font-family: ArialMT;
          font-size: 0.32rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0;
          color: #8db0b7;
        }
      }
    }
  }
}
</style>
