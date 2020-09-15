<template>
  <div class="lottery-index lottery-background-image">
    <div class="brand">
      <img :src="logo" alt="" />
    </div>
    <div class="lottery-index__container">
      <slot></slot>
    </div>
    <footer>
      <div class="nav">
        <router-link class="nav-item" to="/policy">PRIVACY</router-link>
        <router-link class="nav-item" to="/policy">LEGAL</router-link>
      </div>
      <div class="info">
        <div class="info-email">
          <div class="img">
            <img src="@/assets/images/email.png" alt="" srcset="" />
          </div>
          <p>{{ EMAIL }}</p>
        </div>
        <p>&copy;2020 {{ EMAIL }} All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";
import newInfoErr from "@/components/mobile/infoErr/index";

@Component({})
export default class Main extends Vue {
  @State EMAIL!: string;
  @State COMPANY_NAME!: string;
  @State logo!: string;

  showErr() {
    newInfoErr.open();
  }
}
</script>

<style lang="scss" scoped>
$footer-height: 2rem;

.lottery-index {
  width: 100%;
  min-height: 100%;
  padding-top: 1.2rem;
  padding-bottom: 0.48rem;

  &__container {
    width: 100%;
    min-height: calc(100% - #{$footer-height});
    overflow: hidden;
  }

  footer {
    width: 100%;
    // padding-left: 20%;
    // padding-right: 20%;
    margin-top: 0.5rem;
    height: $footer-height;
    overflow: hidden;

    .nav {
      text-align: center;
      font-size: 0.32rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      line-height: 0.3rem;
      font-family: PingFangSC-Medium;
      font-size: 0.3rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0.02rem;
      color: #23808c;

      a:link {
        color: #23808c;
      }
      a:visited {
        color: #23808c;
      }
      a:hover {
        color: #23808c;
      }
      a:active {
        color: #23808c;
      }

      .nav-item {
        display: block;
        width: 50%;
        box-sizing: border-box;

        &:nth-of-type(1) {
          border-right: 0.01rem solid #333;
        }
      }
    }

    .info {
      margin-top: 0.32rem;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 0.26rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.4rem;
      letter-spacing: 0px;
      color: #35737a;

      &-email {
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
          width: 0.4rem;
          height: 0.3rem;
          margin-right: 0.16rem;

          > img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
