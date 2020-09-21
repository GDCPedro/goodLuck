<template>
  <PCMain>
    <div class="pc-draw">
      <pc-title :title="title"></pc-title>
      <pc-sub-title :txt="subTitle"></pc-sub-title>

      <div class="machine-container">
        <Machine :list="IMG_LIST" />
      </div>

      <div class="main-container">
        <pc-special-container class="list-container">
          <div class="list-container__content">
            <div class="decorator">The prize list</div>

            <div class="award-list">
              <template v-for="(item, index) in IMG_LIST">
                <div v-if="index < 6" :key="item.id" class="award-list__item">
                  <img :src="item.image_url" alt="" />
                  <div style="width:100%;">
                    <Tooltip style="width:100%;" :content="item.title">
                      <span class="item-title van-ellipsis">{{
                        item.title + item.title
                      }}</span>
                    </Tooltip>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </pc-special-container>

        <pc-special-container class="introduction-container">
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
              <h4>Note:</h4>
              <p>1. The information you provided must be true.</p>
              <p>2. This activity is valid.</p>
            </div>
          </div>
        </pc-special-container>
      </div>
    </div>
  </PCMain>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Machine from "@/components/desktop/machine/index.vue";
import service from "@/api/index";
import { IRewardItem } from "@/api/types";

@Component({
  components: { Machine }
})
export default class Draw extends Vue {
  title = "Lucky draw";
  subTitle = ["Welcome to the lucky draw. "];
  // eslint-disable-next-line
  IMG_LIST: IRewardItem[] = [];

  mounted() {
    this.getWarrantyGoods();
  }

  getWarrantyGoods() {
    service.getWarrantyGoods().then(res => {
      if (res.code === 0) {
        // eslint-disable-next-line
        this.IMG_LIST = res.data.list;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.decorator {
  width: 200px;
  height: 50px;
  background-image: linear-gradient(
      90deg,
      #2e292f 0%,
      #4b444c 50%,
      #2e292f 100%
    ),
    linear-gradient(#342f35, #342f35);
  background-blend-mode: normal, normal;
  border-radius: 5px;
  text-align: center;
  transform: translateX(-50%);
  font-family: DINAlternate-Bold;
  font-size: 22px;
  line-height: 50px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #ffffff;
  position: absolute;
  top: -20px;
  left: 50%;
}

.award-list {
  text-align: center;
  width: 100%;

  &__item {
    display: inline-block;
    width: 140px;
    // height: 100px;

    &:not(:nth-of-type(2n + 6)) {
      margin-right: 20px;
    }

    > img {
      display: block;
      width: 100%;
      height: 100px;
    }

    .item-title {
      width: 100%;
      display: block;
      font-family: PingFangSC-Medium;
      line-height: 40px;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #342f35;
    }
  }
}

.pc-draw {
  height: 100%;

  .machine-container {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }

  .main-container {
    padding: 0 0.28rem;

    .list-container {
      margin-top: 40px;
      position: relative;

      &__content {
        // border-radius: 0.3rem;
        background-color: #ffffff;
        display: flex;
        justify-content: flex-start;
      }
    }

    .introduction-container {
      // padding: 40px 30px;
      margin-top: 40px;
      margin-bottom: 48px;
      position: relative;

      &__text {
        // text-align: justify;
        background-color: #ffffff;
        font-family: ArialMT;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 1px;
        color: #246167;
        p {
          margin-top: 0.08rem;
        }
      }
    }
  }
}
</style>
