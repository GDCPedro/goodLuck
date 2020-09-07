<template>
  <Main>
    <div class="draw">
      <Title
        :title="title"
        style="font-size: 0.8rem; letter-space: 0.08rem;"
      ></Title>
      <sub-title :txt="subTitle"></sub-title>

      <Machine style="margin-top:0.16rem;" :list="IMG_LIST" />

      <div class="main-container">
        <special-container class="list-container">
          <div class="list-container__content">
            <div class="decorator">The prize list</div>

            <div class="award-list">
              <div
                v-for="item in IMG_LIST"
                :key="item.id"
                class="award-list__item"
              >
                <img :src="item.image_url" alt="" />
                <span class="van-ellipsis">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </special-container>

        <special-container class="introduction-container">
          <div class="introduction-container__text">
            <div class="decorator">INTRODUCTION</div>

            <p>
              1. Enter your purchase information to participate in the lucky
              draw.
            </p>
            <p>2. Choose a task</p>
            <p>
              3. Submit a screenshot of the task
            </p>
            <p>
              4. We will review and send notification via email
            </p>
            <p>
              5. The prizes will be sent within 5 working days.
            </p>

            <div>
              <h4>note:</h4>
              <p>1. The information you provided must be true.</p>
              <p>2. This activity is valid.</p>
            </div>
          </div>
        </special-container>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Machine from "@/components/mobile/Machine.vue";
import service from "@/api/index";
import { IRewardItem } from "@/api/types";

@Component({
  components: { Machine }
})
export default class Draw extends Vue {
  title = "Lucky draw";
  subTitle = ["Welcome to the lucky draw. "];

  IMG_LIST: IRewardItem[] = [];

  mounted() {
    this.getWarrantyGoods();
  }

  getWarrantyGoods() {
    service.getWarrantyGoods().then(res => {
      console.log("getWarrantyGoods", res);
      if (res.code === 0) {
        this.IMG_LIST = res.data.list;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.decorator {
  width: 3rem;
  height: 0.9rem;
  background-image: linear-gradient(
      90deg,
      #2e292f 0%,
      #4b444c 50%,
      #2e292f 100%
    ),
    linear-gradient(#342f35, #342f35);
  background-blend-mode: normal, normal;
  border-radius: 0.15rem;

  margin-left: 50%;
  transform: translate(-50%, -0.56rem);
  font-family: DINAlternate-Bold;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.02rem;
  line-height: 0.9rem;
  text-align: center;
  color: #ffffff;
}

.award-list {
  padding-bottom: 0.16rem;
  text-align: center;

  &__item {
    display: inline-block;
    width: 1.53rem;
    height: 1.35rem;
    margin: 0.16rem 0.24rem;

    > img {
      display: block;
      width: 100%;
      height: 1.35rem;
    }

    > span {
      display: block;
      width: 100%;
      text-align: center;
      height: 0.3rem;
      font-family: PingFangSC-Medium;
      font-size: 0.26rem;
      line-height: 0.3rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0;
      color: #342f35;
    }
  }
}

.draw {
  .main-container {
    padding: 0 0.28rem;

    .list-container {
      padding: 0.2rem;
      margin-top: 0.64rem;

      &__content {
        // padding: 0rem 0.4rem 0.4rem 0.4rem;
        border-radius: 0.3rem;
        background-color: #ffffff;
      }
    }

    .introduction-container {
      padding: 0.2rem;
      margin-top: 0.64rem;

      &__text {
        text-align: justify;
        padding: 0rem 0.4rem 0.4rem 0.4rem;
        border-radius: 0.3rem;
        background-color: #ffffff;
        font-family: ArialMT;
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.5rem;
        letter-spacing: 0.02rem;
        color: #246167;
      }
    }
  }
}
</style>
