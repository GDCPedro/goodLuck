<template>
  <PCMain>
    <div class="pc-complete">
      <div class="pc-complete__titles">
        <pc-title :title="title"></pc-title>
        <pc-sub-title :txt="subTitle"></pc-sub-title>
      </div>

      <pc-special-container class="pc-complete__inner">
        <div class="inner-title">
          <h3>MISSION COMPLETE</h3>
        </div>

        <div class="inner-img">
          <img :src="awardSrc" alt="" srcset="" />
          <span>{{ awardName }}</span>
        </div>

        <div class="inner-tip">
          Please fill in the content
        </div>

        <div class="inner-form">
          <Form ref="formComplete" :model="postdata" :rules="postdataRules">
            <FormItem prop="email">
              <Input
                type="text"
                disabled
                placeholder="E-mail"
                v-model="postdata.email"
              />
            </FormItem>
            <FormItem prop="name">
              <Input
                type="text"
                disabled
                placeholder="Name"
                v-model="postdata.name"
              />
            </FormItem>

            <FormItem prop="phone">
              <Input type="text" placeholder="Phone" v-model="postdata.phone" />
            </FormItem>

            <FormItem prop="orderId">
              <Input
                type="text"
                disabled
                placeholder="Amazon OrderId"
                v-model="postdata.orderId"
              />
            </FormItem>

            <FormItem prop="address">
              <Input
                type="text"
                placeholder="Address"
                v-model="postdata.address"
              />
            </FormItem>

            <FormItem prop="taskImg">
              <ImgUpload
                style="background-color: #f6fbfc;cursor:pointer; border: dashed 1px #96c2ca;border-radius: 10px;"
                :value.sync="postdata.taskImg"
                :isPc="true"
                @upload-success="onUploadSuccess"
              />
            </FormItem>
          </Form>
        </div>
        <div class="inner-btn">
          <pc-button
            width="350"
            style="margin-right: 20px;"
            @click="handleReset"
            >RESELECT TASK</pc-button
          >

          <pc-button
            style="margin-right: 20px;"
            width="350"
            @click="handleSubmit"
            >SUBMIT</pc-button
          >
        </div>
      </pc-special-container>
    </div>
  </PCMain>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ImgUpload from "@/components/mobile/ImgUpload.vue";
// import newInfoErr from "@/components/mobile/infoErr/index";
import service from "@/api/index";
import { Toast } from "vant";
import { Form } from "view-design";

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
  // @Prop({ default: () => require("@/assets/images/airpods-large.png") })
  // awardSrc!: string;

  // https://img.yzcdn.cn/vant/apple-1.jpg

  // http://192.168.1.140:9999/#/pc/complete?mission=3&awardSrc=https%3A%2F%2Fimg.yzcdn.cn%2Fvant%2Fapple-1.jpg

  get awardSrc() {
    return this.$route.query.awardSrc;
  }

  get awardName() {
    return this.$route.query.awardName;
  }

  // @Prop({ default: "Air Pods" })
  // awardName!: string;

  get userInfo() {
    return this.$store.state.userInfo;
  }

  title = "Lucky draw";
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

  postdataRules = {
    // eslint-disable-next-line
    orderId: [{ required: true, message: "Please enter OrderId" }],
    name: [{ required: true, message: "Please enter name" }],
    taskImg: [{ required: true, message: "Please upload task picture" }],
    email: [
      { required: true, message: "Please enter email" },
      {
        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        message: "Please enter valid email"
      }
    ],
    phone: [
      { pattern: /\d/, message: "Please enter valid phone number" },
      { required: true, message: "Please enter phone" }
    ]
  };

  onUploadSuccess(file: File) {
    this.file = file;
    this.postdata.taskImg = file;
    (this.$refs.formComplete as Form).validate();
  }

  handleSubmit() {
    (this.$refs.formComplete as Form).validate(valid => {
      if (valid) {
        this.warrantySubmit();
      }
    });
  }

  warrantySubmit() {
    const formData = new FormData();
    formData.append("address", this.postdata.address);
    // eslint-disable-next-line
    formData.append("mission_file", this.file!);

    service.warrantySubmit(formData).then(res => {
      if (res.code === 0) {
        Toast.success(res.message);
        setTimeout(() => {
          this.$router.push("/pc/succeed");
        }, 500);
      } else {
        // newInfoErr.open();
      }
    });
  }

  handleReset() {
    this.$router.push(`/pc/draw?mission=${this.$route.query.mission}`);
  }
}
</script>

<style lang="scss">
.pc-complete {
  // height: 100%;

  &__inner {
    margin-top: 40px;
    margin-bottom: 45px;

    .inner-img {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      > img {
        display: block;
        width: 200px;
        height: 200px;
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

    .inner-tip {
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

    .inner-title {
      width: 100%;
      text-align: center;
      font-family: ArialMT;
      font-size: 28px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      color: #246167;
    }

    .inner-btn {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .inner-form {
      margin-top: 30px;

      .ivu-input-wrapper {
        input {
          background-color: #e6f1f3;
          font-family: ArialMT;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 1px;
          color: #8db0b7;
        }

        border-radius: 5px;
      }
    }
  }
}
</style>
-
