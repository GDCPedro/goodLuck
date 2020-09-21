<template>
  <PCMain>
    <div class="thanks">
      <pc-title
        :title="title"
        style="font-size: 70px; letter-space: 4px;"
      ></pc-title>
      <pc-sub-title :txt="subTitle"></pc-sub-title>

      <pc-special-container class="thanks-main">
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
          <!-- 
            <div class="contact-email">
              <div>Contact Email: {{ EMAIL }}</div>
            </div> -->
        </div>
      </pc-special-container>
    </div>
  </PCMain>
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
  height: 100%;

  &-main {
    margin-top: 40px;
    margin-bottom: 45px;

    &__content {
      background-color: #fff;
      border-radius: 0.3rem;
      padding-top: 1rem;
      padding-bottom: 1rem;

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
        display: block;

        font-family: PingFangSC-Semibold;
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 0px;
        color: #246167;
      }

      h4 {
        width: 100%;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #246167;

        font-family: PingFangSC-Regular;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 45px;
        letter-spacing: 0px;
        color: #246167;
      }

      .long-questions {
        padding: 0 16px;
        width: 100%;
        margin-top: 56px;

        background-image: linear-gradient(
            90deg,
            #ebeaeb 30%,
            #ececed 50%,
            #ebeaeb 100%
          ),
          linear-gradient(rgba(196, 15, 21, 0.1), rgba(196, 15, 21, 0.1));
        background-blend-mode: normal, normal;
        box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.028);

        &__txt {
          width: 100%;
          text-align: center;
          line-height: 90px;
          font-family: PingFangSC-Semibold;
          font-weight: normal;
          font-stretch: normal;

          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 45px;
          letter-spacing: 0px;
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
