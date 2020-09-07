<template>
  <Main>
    <div class="complete">
      <Title
        :title="title"
        style="font-size: 0.8rem; letter-space: 0.08rem;"
      ></Title>
      <sub-title :txt="subTitle"></sub-title>
    </div>

    <div class="complete-container">
      <special-container style="padding: 0.2rem;">
        <div class="complete-container__inner">
          <h4 class="title">MISSON COMPLETED</h4>

          <div class="inner-img">
            <img :src="awardSrc" alt="" srcset="" />
            <span>{{ awardName }}</span>
          </div>

          <div class="inner-tip">
            Please fill in the content
          </div>

          <div class="inner-form native-form">
            <van-form validate-first @failed="onFailed">
              <van-field
                name="email"
                autocomplete="off"
                v-model="postdata.email"
                disabled
                placeholder="E-mail"
                :rules="[
                  {
                    required: true,
                    message: '',
                    pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    message: ''
                  }
                ]"
              />
              <van-field
                name="name"
                autocomplete="off"
                v-model="postdata.name"
                disabled
                placeholder="Name"
                :rules="[{ required: true, message: '' }]"
              />
              <van-field
                name="phone"
                autocomplete="off"
                v-model="postdata.phone"
                disabled
                type="number"
                placeholder="Phone"
                :rules="[{ required: true, message: '' }]"
              />
              <van-field
                name="orderId"
                autocomplete="off"
                v-model="postdata.orderId"
                disabled
                placeholder="Amazon Orderld"
                :rules="[{ required: true, message: '' }]"
              />
              <van-field
                name="address"
                autocomplete="off"
                v-model="postdata.address"
                placeholder="Address"
                :rules="[{ required: true, message: '' }]"
              />
              <!-- 文件上传 -->
              <van-field
                name="taskImg"
                v-model="postdata.taskImg"
                style="height: 1.78rem;padding: 0;"
                :rules="[{ required: true, message: '' }]"
              >
                <template #input>
                  <ImgUpload
                    :value.sync="postdata.taskImg"
                    @upload-success="onUploadSuccess"
                  />
                </template>
              </van-field>

              <div style="width: 100%;">
                <Button
                  class="inner-form__button"
                  long
                  theme="longDark"
                  native-type="submit"
                  @click="handleSubmit"
                >
                  CONFIRM
                </Button>
                <Button
                  class="inner-form__button"
                  long
                  theme="longLight"
                  @click="handleReset"
                >
                  RESELECT TASK
                </Button>
              </div>
            </van-form>
          </div>
        </div>
      </special-container>
    </div>
  </Main>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ImgUpload from "@/components/mobile/ImgUpload.vue";
import newInfoErr from "@/components/mobile/infoErr/index";
import { State } from "vuex-class";
import service from "@/api/index";
import { Toast } from "vant";

interface Postdata {
  orderId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  taskImg: File | string;
}

@Component({
  components: { ImgUpload }
})
export default class Complete extends Vue {
  @Prop({ default: () => require("@/assets/images/airpods-large.png") })
  awardSrc!: string;

  @Prop({ default: "Air Pods" })
  awardName!: string;

  get userInfo() {
    return this.$store.state.userInfo;
  }

  title = "LUCKY DRAW TITLE";
  subTitle = ["Welcome to the lucky draw. Good luck!"];

  file: File | null = null;

  postdata: Postdata = {
    orderId: this.userInfo.userOrderId,
    name: this.userInfo.userName,
    email: this.userInfo.userEmail,
    phone: this.userInfo.userPhone,
    address: "",
    taskImg: ""
  };

  onFailed() {
    // newInfoErr.open();
  }

  onUploadSuccess(file: File) {
    this.file = file;
  }

  handleSubmit() {
    for (const key in this.postdata) {
      const currentVal = this.postdata[
        key as "orderId" | "name" | "email" | "phone" | "address" | "taskImg"
      ];

      if (!currentVal) return;
    }

    this.warrantySubmit();
  }

  warrantySubmit() {
    const formData = new FormData();
    formData.append("address", this.postdata.address);
    formData.append("mission_file", this.file!);

    service.warrantySubmit(formData).then(res => {
      if (res.code === 0) {
        Toast.success(res.message);
        setTimeout(() => {
          this.$router.push("/succeed");
        }, 500);
      } else {
        newInfoErr.open();
      }
    });
  }

  handleReset() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.complete {
  min-height: 100%;

  &-container {
    margin-top: 0.16rem;
    width: 100%;
    padding: 0.28rem;

    &__inner {
      background-color: #fff;
      border-radius: 0.3rem;
      padding-top: 0.32rem;
      padding-bottom: 0.4rem;

      .title {
        text-align: center;
        font-family: PingFangSC-Semibold;
        font-size: 0.36rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.45rem;
        letter-spacing: 0;
        color: #246167;
      }

      .inner-img {
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

      .inner-tip {
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

      .inner-form {
        padding: 0rem 0.48rem 0.4rem 0.48rem;

        &__button {
          width: 100%;

          &:nth-of-type(1) {
            margin-bottom: 0.24rem;
          }
        }
      }
    }
  }
}
</style>
-
