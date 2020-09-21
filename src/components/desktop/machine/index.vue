<template>
  <div class="machine">
    <div class="machine-bg">
      <div class="award-container">
        <div
          class="award-scroll scroll-start"
          id="award-scroll"
          :class="{ move: started }"
        >
          <template v-for="item in imgList">
            <div :key="item.id" class="award-scroll__item">
              <img
                :id="`machine_${item.id}`"
                :src="item.image_url"
                alt=""
                srcset=""
              />
            </div>
          </template>
        </div>
      </div>
      <van-button
        @click="handleClick"
        :disabled="!buttonActivated"
        class="machine-bg__btn"
      ></van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { IRewardItem } from "@/api/types";
import { Toast } from "vant";
import service from "@/api/index";
import newCongratulations from "@/components/desktop/congratulations/index";

@Component({})
export default class Machine extends Vue {
  @Prop()
  list!: IRewardItem[];

  imgList: IRewardItem[] = [];

  started = false;

  imgIdx = 0;

  buttonActivated = false;

  buttonPressed = false;

  @Watch("list", { immediate: true })
  onListChange(val: IRewardItem[]) {
    if (val.length <= 0) {
      this.buttonActivated = false;
    } else {
      this.imgList = this.list;

      Toast.loading({
        duration: 0,
        message: "Loading"
      });

      this.$nextTick(() => {
        this.checkImgStatus();
      });
    }
  }

  created() {
    this.autoShowAward();
  }

  /**
   * 判断奖品滚动的图片都加载完成
   */
  checkImgStatus() {
    if (this.imgIdx >= this.list.length - 1) {
      this.buttonActivated = true;
      Toast.clear();
      return;
    }

    const id = `machine_${this.list[this.imgIdx].id}`;
    const imgTarget = document.getElementById(id) as HTMLImageElement;

    if (imgTarget.complete) {
      this.imgIdx++;
      this.checkImgStatus();
    } else {
      setTimeout(() => {
        this.checkImgStatus();
      }, 500);
    }
  }

  handleClick() {
    if (this.buttonPressed) return;
    this.warrantyBegin();
  }

  startRoll() {
    // 单个奖品的宽度是125 + 40 px
    // 窗口宽度400 中间是200

    // 使图片正对指针
    // eslint-disable-next-line
    const scrollElement = document.getElementById("award-scroll")!;

    const style = document.styleSheets[0] as CSSStyleSheet;

    // 奖品列表的长度
    const listLen = this.list.length;

    this.started = true;

    style.insertRule(`@keyframes award-move {
      from {
        transform: translateX(121px);
      }

      to {
        transform: translateX(-${(listLen - 1) * 165 - 121}px);
      }
    }`);
  }

  autoShowAward() {
    if (this.$route.query.mission) {
      service.warrantyBegin().then(res => {
        if (res.code === 0 || res.code === 1001) {
          newCongratulations.open(
            res.data,
            Number(this.$route.query.mission) || 1
          );
        }
      });
    }
  }

  warrantyBegin() {
    this.buttonPressed = true;
    // Toast.loading({ duration: 0 });

    service
      .warrantyBegin()
      .then(res => {
        // Toast.clear();
        if (res.code === 0) {
          this.startRoll();

          setTimeout(() => {
            this.toSelectedAward(res.data);
            this.started = false;
            setTimeout(() => {
              newCongratulations.open(res.data);
            }, 500);
          }, 6000);
        } else if (res.code === 1001) {
          // 已参加
          this.toSelectedAward(res.data);
          newCongratulations.open(res.data);
        }
      })
      .finally(() => {
        // Toast.clear();
        this.buttonPressed = false;
      });
  }

  toSelectedAward(award: IRewardItem) {
    const idx = this.list.findIndex(item => item.id === award.id);

    // eslint-disable-next-line
    const scrollElement = document.getElementById("award-scroll")!;

    const value = -44 + 165 * (idx + 1);

    scrollElement.style.transform = "translateX(" + value + "px)";
  }
}
</script>

<style lang="scss" scoped>
.element::-webkit-scrollbar {
  width: 0 !important;
}
.element {
  -ms-overflow-style: none;
}
.element {
  overflow: -moz-scrollbars-none;
}

.machine {
  width: 518px;
  height: 483px;

  &-bg {
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/images/draw-machine.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    // padding: 1.08rem 0.85rem 0 0.85rem;
    padding: 0 59px;

    .award-container {
      width: 100%;
      height: 125px;
      // border-radius: 0.28rem;
      overflow: hidden;
      transform: translate3d(0, 0, 0);
      margin-top: 75px;

      .move {
        animation: award-move 2s 0s ease infinite;
        animation-direction: alternate;
        -webkit-animation-direction: alternate; /* Safari 和 Chrome */
      }

      .award-scroll {
        transform: translateX(-374px);
        // transform: translateX(-44px + 165px);
        height: 100%;
        white-space: nowrap;
        animation-iteration-count: infinite;
        transition-timing-function: ease-in-out;
        transition: transform 0.1s;
        -webkit-transition: -webkit-transform 0.1s;

        &__item {
          width: 125px;
          height: 100%;
          border-radius: 0.1rem;
          display: inline-block;
          // margin-left: 0.27rem;
          // margin-right: 0.27rem;
          margin: 0 20px;

          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    &__btn {
      background: transparent;
      border: 0;
      width: 300px;
      height: 90px;
      background-image: url("~@/assets/images/START.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-top: 110px;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
