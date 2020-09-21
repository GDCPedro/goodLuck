<template>
  <Modal
    v-model="show"
    :mask-closable="false"
    :closable="false"
    :footer-hide="true"
    class="congratulations"
  >
    <pc-special-container style="padding: 12px;">
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
          <!-- <van-radio-group v-model="taskRadio" @change="handleTaskChange">
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
          </van-radio-group> -->

          <div class="options-item">
            <Card>
              <div>
                <div class="options-item__img">
                  <img src="@/assets/images/amazon.png" alt="" />
                </div>
                <h4>Leave a 5-star review at least 15 words</h4>
              </div>
            </Card>
          </div>

          <div class="options-item">
            <Card>
              <div>
                <div class="options-item__img">
                  <img src="@/assets/images/fb.png" alt="" />
                </div>
                <h4>
                  Post a photo of our product on facebook, and get 300 likes
                </h4>
              </div>
            </Card>
          </div>

          <div class="options-item">
            <Card>
              <div>
                <div class="options-item__img">
                  <img src="@/assets/images/youtube.png" alt="" />
                </div>
                <h4>
                  Submit a 45-min long product video on YouTube
                </h4>
              </div>
            </Card>
          </div>
        </div>

        <div class="congratulations-inner__radios">
          <!-- <RadioGroup v-model="taskRadio"> -->
          <!-- <Radio :true-value="1" @on-change="handlePcRadioChange(1)"> </Radio>
          <Radio :true-value="2" @on-change="handlePcRadioChange(2)"> </Radio>
          <Radio :true-value="3" @on-change="handlePcRadioChange(3)"> </Radio> -->
          <!-- </RadioGroup> -->
          <div class="radio-item" @click="taskRadio = 1">
            <!-- <div class="radio-item_empty"></div>
            <div class="radio-item_checked">
              <div class="checked-img"></div>
            </div> -->
            <div class="radio-item__img">
              <img
                class="img-icon"
                :src="taskRadio === 1 ? activeIcon : inactiveIcon"
              />
            </div>
          </div>

          <div class="radio-item" @click="taskRadio = 2">
            <div class="radio-item__img">
              <img
                class="img-icon"
                :src="taskRadio === 2 ? activeIcon : inactiveIcon"
              />
            </div>
          </div>

          <div class="radio-item" @click="taskRadio = 3">
            <div class="radio-item__img">
              <img
                class="img-icon"
                :src="taskRadio === 3 ? activeIcon : inactiveIcon"
              />
            </div>
          </div>
        </div>

        <div class="congratulations-inner__steps">
          <p>1. You only need to complete one task.</p>
          <p>
            2. If you choose the second or the third task, You must focus on our
            product in your Facebook post and YouTube video.
          </p>
        </div>
        <footer style="margin-top:32px;">
          <Button
            style="width: 500px;font-size:18px;"
            theme="longDark"
            @click="handleYes"
            >Go</Button
          >
        </footer>
      </div>
    </pc-special-container>
  </Modal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import newCongratulations from "@/components/desktop/congratulations/index";
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

  @Prop({ type: Number, default: 1 })
  defaultTask!: number;

  get activeIcon() {
    return require("@/assets/images/radio-checked.png");
  }

  get inactiveIcon() {
    return require("@/assets/images/radio-unchecked.png");
  }

  taskRadio = 1;

  mounted() {
    this.$nextTick(() => {
      this.hideRadioTxt();
    });
    this.setDefaultTask();
  }

  handleTaskChange(e: Event) {
    console.log(this.taskRadio);
    console.log(e);
  }

  handleNo() {
    newCongratulations.close();
  }

  handleYes() {
    console.log(this);
    this.show = false;
    router.push(
      `/pc/complete?mission=${this.taskRadio}&awardSrc=${this.awardInfo.image_url}&awardName=${this.awardInfo.title}`
    );
    // newCongratulations.close();
  }

  setDefaultTask() {
    this.taskRadio = this.defaultTask;
  }

  hideRadioTxt() {
    const txts = document.getElementsByClassName("ivu-radio-wrapper");
    console.log(txts);

    Array.from(txts).forEach(elem => {
      console.log(elem);

      // (elem as any).innerText = "";
    });
  }

  handlePcRadioChange(val: number) {
    console.log(222);

    console.log(val);
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

<style lang="scss">
.congratulations {
  background-color: transparent;
  text-align: center;

  .ivu-modal-content {
    width: 1200px;
    left: 50%;
    transform: translateX(-50%);
  }

  .special-container__slot {
    padding: 0;
  }

  .ivu-modal-content {
    background-color: transparent;
    box-shadow: none;
  }

  .ivu-modal-body {
    padding: 0;
    border-radius: 30px;
  }

  &-inner {
    font-family: PingFangSC-Semibold;
    background-color: #ffffff;
    border-radius: 30px;
    padding-top: 40px;
    padding-bottom: 40px;

    h4 {
      width: 100%;
      text-align: center;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 45px;
      letter-spacing: 0;
      color: #246167;
    }

    &__img {
      width: 200px;
      margin-left: 50%;
      transform: translateX(-50%);

      > img {
        display: block;
        width: 100%;
        height: 210px;
      }

      > span {
        font-weight: bold;
        margin-top: 12px;
        display: block;
        width: 100%;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        line-height: 16px;
        font-stretch: normal;
        letter-spacing: 0;
        color: #342f35;
      }
    }

    &__tip {
      margin-top: 32px;
      text-align: center;
      width: 100%;
      // line-height: 90px;
      background-image: linear-gradient(
          90deg,
          #ebeaeb 30%,
          #ececed 50%,
          #ebeaeb 100%
        ),
        linear-gradient(rgba(196, 15, 21, 0.1), rgba(196, 15, 21, 0.1));
      background-blend-mode: normal, normal;
      box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.028);

      font-family: PingFangSC-Semibold;
      font-size: 18px;
      padding: 16px 0;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0;
      color: #246167;
    }

    &__options {
      padding: 20px;
      display: flex;
      justify-content: space-between;

      .options-item {
        // flex: calc((100% - 70px) / 3);
        flex: 0.33333333;

        display: flex;
        justify-content: center;
        align-items: center;

        &:not(:nth-of-type(1)) {
          margin-left: 20px;
        }

        .ivu-card,
        .ivu-card-body {
          width: 100%;
          height: 100%;

          > div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
          }
        }

        &__img {
          width: 48px;
          height: 48px;

          > img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }

        h4 {
          line-height: 40px;
          font-size: 16px;
          color: #246167;
          letter-spacing: 0;
          font-family: PingFangSC-Semibold;
        }
      }
    }

    &__radios {
      padding: 0 16.666667%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .radio-item {
        cursor: pointer;

        &__img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          // padding: 0;
          // border: 1px solid #9ac5ce;
        }
      }

      .ivu-radio-inner {
        &:after {
          padding: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          left: 0;
          bottom: 0;
          top: 0;
          right: 0;
        }
      }

      .ivu-radio-checked {
        .ivu-radio-inner {
          width: 30px;
          height: 30px;
          padding: 0;
          border: 1px solid #9ac5ce;

          &:after {
            padding: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #9ac5ce;
          }
        }
      }
    }

    &__steps {
      padding: 0 38px;
      margin-top: 32px;
      // text-align: justify;
      font-family: ArialMT;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 2px;
      color: #246167;
      text-align: left;
      font-size: 16px;
      line-height: 30px;
    }

    > footer {
      margin-top: 0.4rem;
      padding: 0 0.48rem;
      width: 100%;
    }
  }
}
</style>
