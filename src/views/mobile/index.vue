<template>
  <Main>
    <div class="index-login">
      <Title :title="title"></Title>

      <special-container class="form-container">
        <div class="form-container__inner">
          <h4>PURCHASE INFOMATION</h4>

          <van-form validate-first @failed="onFailed">
            <van-field
              name="orderId"
              autocomplete="off"
              v-model="postdata.order_id"
              placeholder="Order ID"
              :rules="[{ required: true, message: '' }]"
            />
            <van-field
              name="name"
              autocomplete="off"
              v-model="postdata.name"
              placeholder="Name"
              :rules="[{ required: true, message: '' }]"
            />
            <van-field
              name="email"
              autocomplete="off"
              v-model="postdata.email"
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
              name="phone"
              autocomplete="off"
              v-model="postdata.phone"
              type="number"
              placeholder="Phone"
            />
            <div style="width: 100%;">
              <Button
                class="form-button"
                long
                theme="longDark"
                native-type="submit"
                @click="handleSubmit"
              >
                SUBMIT
              </Button>
            </div>
          </van-form>
        </div>
      </special-container>

      <special-container style="margin-top: 0.24rem;">
        <div class="special-sub">
          <sub-title :txt="subTitle"></sub-title>
        </div>
      </special-container>
    </div>
  </Main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import newHaveDraw from "@/components/mobile/haveDraw/index";
import newInfoErr from "@/components/mobile/infoErr/index";
import { IInfoData } from "@/api/types";
import service from "@/api/index";

/** 首页 */
@Component({})
export default class Index extends Vue {
  @State COMPANY_NAME!: string;
  // eslint-disable-next-line
  @Mutation("SET_ASIN_ID") setAsinId: any;
  // eslint-disable-next-line
  @Mutation("SET_SUFFIX") setSuffix: any;
  // eslint-disable-next-line
  @Mutation("SET_USER_ID") setUserId: any;
  // eslint-disable-next-line
  @Mutation("SET_USER_INFO") setUserInfo: any;
  // eslint-disable-next-line
  @Mutation("SET_BRAND_NAME") setBrandName: any;
  // eslint-disable-next-line
  @Mutation("SET_LOGO") setLogo: any;

  title = "REGISTER TO EXTEND YOUR WARRANTY TO 2 YEARS";

  get subTitle() {
    return [
      "1. Activate and extend your warranty service to 2 years.",
      `2. Please fill in the following information to activate the warranty service,
      and extend it to two years. Plus, you could also participate in the lucky draw to win the prize.`,
      "3. Service Email: Support@meetdeals.com",
      "4.Our website reserves the right of final interpretation."
    ];
  }

  postdata: IInfoData = {
    // eslint-disable-next-line
    order_id: "",
    name: "",
    email: "",
    phone: ""
  };

  mounted() {
    this.setAsinId(this.$route.params.asin_id);
    this.setSuffix(this.$route.params.suffix);
    this.initPage();
  }

  initPage() {
    service.initPage().then(res => {
      if (res.code === 0) {
        this.setBrandName(res.data.brandName);
        this.setLogo(res.data.log);

        document.title = res.data.brandName;
        const link =
          document.querySelector("link[rel*='icon']") ||
          document.createElement("link");
        // eslint-disable-next-line
        (link as any).type = "image/x-icon";
        // eslint-disable-next-line
        (link as any).rel = "shortcut icon";
        // eslint-disable-next-line
        (link as any).href = res.data.log;
        document.getElementsByTagName("head")[0].appendChild(link);
      }
    });
  }

  onFailed() {
    newInfoErr.open();
  }

  handleSubmit() {
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    for (const key in this.postdata) {
      const currentVal = this.postdata[
        key as "order_id" | "name" | "email" | "phone"
      ];

      if (
        (!currentVal && key !== "phone") ||
        !emailReg.test(this.postdata.email)
      )
        return;
    }
    this.customerInfoSave();
  }

  customerInfoSave() {
    service.customerInfoSave(this.postdata).then(res => {
      console.log(res);
      if (res.code === 0) {
        //成功返回了user_id
        this.setUserId(res.data.user_id);
        this.setUserInfo({
          userName: this.postdata.name,
          userEmail: this.postdata.email,
          userPhone: this.postdata.phone,
          // eslint-disable-next-line
          userOrderId: this.postdata.order_id
        });
        newHaveDraw.open();
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.special-sub {
  background-color: #fff;
  // padding: 0.48rem 0.48rem 0.4rem 0.48rem;
  padding: 0.4rem 0;
  border-radius: 0.3rem;
  margin: 0.16rem;
}

.index-login {
  padding: 0 0.3rem;
  height: 100%;

  .form-container {
    margin-top: 0.24rem;

    &__inner {
      margin: 0.16rem;
      padding: 0.48rem 0.48rem 0.4rem 0.48rem;
      background-color: #ffffff;
      border-radius: 0.3rem;

      h4 {
        text-align: center;
        font-family: PingFangSC-Semibold;
        font-size: 0.36rem;
        font-weight: normal;
        font-stretch: normal;
        // line-height: 0.5rem;
        letter-spacing: 0;
        color: #246167;
      }

      .van-cell {
        background-color: #e6f1f3;
        border-radius: 0.1rem;
        background-color: #e6f1f3;
        height: 0.98rem;
        margin-bottom: 0.28rem;

        letter-spacing: 0.02rem;
        font-family: ArialMT;
        font-size: 0.32rem;
        color: #8db0b7;

        &:nth-of-type(1) {
          margin-top: 0.48rem;
        }
      }

      .form-button {
        width: 100%;
        font-family: DINAlternate-Bold;
        font-size: 0.36rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0.02rem;
        color: #246167;
      }
    }
  }
}
</style>
