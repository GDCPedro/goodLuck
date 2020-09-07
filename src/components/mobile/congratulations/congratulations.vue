<template>
  <van-dialog
    v-model="show"
    :showConfirmButton="false"
    :showCancelButton="false"
    class="congratulations"
  >
    <special-container style="padding: 0.2rem;">
      <div class="congratulations-inner">
        <h4>Congratulations on your winning</h4>
        <div class="congratulations-inner__img">
          <img :src="awardInfo.image_url" alt="" srcset="" />
          <span>{{ awardInfo.title }}</span>
        </div>
        <div class="congratulations-inner__tip">
          Please complete one of the following tasks to get your prize
        </div>
        <div class="congratulations-inner__options">
          <van-radio-group v-model="taskRadio" @change="handleTaskChange">
            <van-cell-group>
              <van-cell
                clickable
                @click="taskRadio = 1"
                :class="{ 'task-checked': taskRadio === 1 }"
              >
                <div class="cell-image">
                  <img src="@/assets/images/amazon.png" alt="" />
                  <span class="van-multi-ellipsis--l3"
                    >Leave a 5-star review at least 15 words
                  </span>
                </div>
                <template #right-icon>
                  <van-radio :name="1" checked-color="#96c2ca">
                    <template #icon="props">
                      <img
                        class="img-icon"
                        :src="props.checked ? activeIcon : inactiveIcon"
                      />
                    </template>
                  </van-radio>
                </template>
              </van-cell>
              <van-cell
                clickable
                @click="taskRadio = 2"
                :class="{ 'task-checked': taskRadio === 2 }"
              >
                <div class="cell-image">
                  <img src="@/assets/images/fb.png" alt="" />
                  <span class="van-multi-ellipsis--l3"
                    >Post a photo of our product on facebook, and get 300 likes
                  </span>
                </div>
                <template #right-icon>
                  <van-radio :name="2" checked-color="#96c2ca">
                    <template #icon="props">
                      <img
                        class="img-icon"
                        :src="props.checked ? activeIcon : inactiveIcon"
                      />
                    </template>
                  </van-radio>
                </template>
              </van-cell>
              <van-cell
                clickable
                @click="taskRadio = 3"
                :class="{ 'task-checked': taskRadio === 3 }"
              >
                <div class="cell-image">
                  <img src="@/assets/images/youtube.png" alt="" />
                  <span class="van-multi-ellipsis--l3"
                    >Submit a 45-min long product video on YouTube
                  </span>
                </div>
                <template #right-icon>
                  <van-radio :name="3" checked-color="#96c2ca">
                    <template #icon="props">
                      <img
                        class="img-icon"
                        :src="props.checked ? activeIcon : inactiveIcon"
                      />
                    </template>
                  </van-radio>
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
        <div class="congratulations-inner__steps">
          <p>1. You only need to complete one task</p>
          <p>
            2. You must focus on our product in your Facebook post and YouTube
            video.
          </p>
        </div>
        <footer>
          <Button style="width: 100%;" theme="longDark" @click="handleYes"
            >Go</Button
          >
        </footer>
      </div>
    </special-container>
  </van-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import newCongratulations from "@/components/mobile/congratulations/index";
import router from "@/router";
import { IRewardItem } from "@/api/types";

@Component({})
export default class Congratulations extends Vue {
  show = true;

  @Prop({
    default: () => {
      return {
        id: 2,
        // eslint-disable-next-line
        image_url: "http://api.meetdeals.com/uploads/images/20美金购物卡.jpg",
        title: "$20 Amazon Gift Card"
      };
    }
  })
  awardInfo!: IRewardItem;

  get activeIcon() {
    return require("@/assets/images/radio-checked.png");
  }

  get inactiveIcon() {
    return require("@/assets/images/radio-unchecked.png");
  }

  taskRadio = 1;

  handleTaskChange(e: Event) {
    console.log(this.taskRadio);
    console.log(e);
  }

  handleNo() {
    newCongratulations.close();
  }

  handleYes() {
    console.log(this);

    router.push(`/complete?mission=${this.taskRadio}`);
    newCongratulations.close();
  }
}
</script>

<style lang="scss">
.task-checked {
  background-color: #f0f5f6;
}

.congratulations-inner__options {
  .img-icon {
    width: 0.4rem;
    height: 0.4rem;
  }
  .van-radio__icon .van-icon {
    width: 0.4rem;
    height: 0.4rem;
    border: 0.04rem solid #96c2ca;
  }
}
</style>

<style lang="scss" scoped>
.congratulations {
  background-color: transparent;
  width: 6.9rem;
  overflow: scroll;
  max-height: 100%;

  &-inner {
    font-family: PingFangSC-Semibold;
    background-color: #ffffff;
    border-radius: 0.3rem;
    padding-top: 0.48rem;
    padding-bottom: 0.4rem;

    h4 {
      width: 100%;
      text-align: center;
      font-family: PingFangSC-Semibold;
      font-size: 0.36rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.45rem;
      letter-spacing: 0;
      color: #246167;
    }

    &__img {
      width: 3.5rem;
      margin-left: 50%;
      transform: translateX(-50%);

      > img {
        display: block;
        width: 100%;
        height: 3.5rem;
      }

      > span {
        margin-top: 0.24rem;
        display: block;
        width: 100%;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 0.26rem;
        line-height: 0.32rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #342f35;
      }
    }

    &__tip {
      margin-top: 0.48rem;
      text-align: center;
      width: 100%;
      line-height: 0.9rem;
      background-image: linear-gradient(
          90deg,
          #ebeaeb 30%,
          #ececed 50%,
          #ebeaeb 100%
        ),
        linear-gradient(rgba(196, 15, 21, 0.1), rgba(196, 15, 21, 0.1));
      background-blend-mode: normal, normal;
      box-shadow: 0 0.08rem 0.1rem 0 rgba(0, 0, 0, 0.028);

      font-family: PingFangSC-Semibold;
      font-size: 0.3rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0;
      color: #246167;
    }

    &__options {
      padding: 0 0.32rem;
      .van-cell {
        margin-top: 0.32rem;
        border-radius: 0.1rem;
        border: solid 0.01rem #96c2ca;
      }

      .cell-image {
        display: flex;
        align-items: center;
        text-align: justify;

        > img {
          display: inline-block;
          width: 0.7rem;
          height: 0.7rem;
        }

        > span {
          display: inline-block;
          margin: 0 0.32rem;
          font-family: PingFangSC-Semibold;
          font-size: 0.32rem;
          font-weight: normal;
          font-stretch: normal;
          line-height: 0.45rem;
          letter-spacing: 0;
          color: #246167;
        }
      }
    }

    &__steps {
      margin-top: 0.24rem;
      text-align: justify;
      padding: 0 0.32rem;
      font-family: ArialMT;
      font-size: 0.3rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.5rem;
      letter-spacing: 0.02rem;
      color: #246167;
    }

    > footer {
      margin-top: 0.4rem;
      padding: 0 0.48rem;
      width: 100%;
    }
  }
}
</style>
