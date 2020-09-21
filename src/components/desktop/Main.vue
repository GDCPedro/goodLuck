<template>
  <div class="pc-main">
    <div class="center-content">
      <div class="center-content__brand">
        <img :src="logo" alt="" srcset="" />
      </div>
      <div class="center-content__inner">
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
          <span>&copy;2020 Meetdeals All Rights Reserved</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({})
export default class Main extends Vue {
  @State EMAIL!: string;
  @State COMPANY_NAME!: string;
  @State logo!: string;
}
</script>

<style lang="scss" scoped>
// $footer-height: 200px;

.pc-main {
  padding-bottom: 20px;
  width: 100%;
  min-height: 100vh;
  background-image: url("~@/assets/desktop-images/pc-main-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .center-content {
    width: 1104px;
    margin-left: 50%;
    height: 100%;
    transform: translateX(-50%);
    padding-top: 120px;

    &__brand {
      width: 82px;
      height: 84px;
      background-color: #fff;
      border-bottom-right-radius: 50%;
      border-bottom-left-radius: 50%;
      padding: 8px;
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__inner {
      width: 100%;
    }

    footer {
      width: 100%;
      margin-top: 0.5rem;
      // height: $footer-height;
      overflow: hidden;

      .nav {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height: 30px;
        font-family: PingFangSC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 2px;
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
            border-right: 2px solid #23808c;
          }
        }
      }

      .info {
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #35737a;

        &-email {
          display: flex;
          justify-content: center;
          align-items: center;

          .img {
            width: 20px;
            height: 15px;
            margin-right: 8px;

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
}
</style>
