<template>
  <PCMain>
    <div class="pc-index">
      <pc-title :title="TITLE"></pc-title>
      <pc-sub-title :txt="subTitle"></pc-sub-title>

      <pc-special-container class="pc-index__inner">
        <div class="inner-title">
          <h3>PURCHASE INFOMATION</h3>
        </div>
        <div class="inner-form">
          <Form ref="formCustom" :model="postdata" :rules="postdataRules">
            <FormItem prop="order_id">
              <Input
                type="text"
                placeholder="OrderId"
                v-model="postdata.order_id"
              />
            </FormItem>
            <FormItem prop="name">
              <Input type="text" placeholder="Name" v-model="postdata.name" />
            </FormItem>
            <FormItem prop="email">
              <Input
                type="text"
                placeholder="E-mail"
                v-model="postdata.email"
              />
            </FormItem>

            <FormItem prop="phone">
              <Input type="text" placeholder="Phone" v-model="postdata.phone" />
            </FormItem>
          </Form>
        </div>
        <div class="inner-btn">
          <pc-button width="350" @click="handleSubmit">SUBMIT</pc-button>
        </div>
      </pc-special-container>
    </div>
  </PCMain>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import service from "@/api/index";
import { IInfoData } from "@/api/types";
import { Form } from "view-design";
import newHaveDraw from "@/components/desktop/haveDraw/index";

/**
 * PC端的提交订单号页面--主页
 */
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

  TITLE = "REGISTER TO EXTEND YOUR WARRANTY TO 2 YEARS";

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

  postdataRules = {
    // eslint-disable-next-line
    order_id: [{ required: true, message: "Please enter OrderId" }],
    name: [{ required: true, message: "Please enter name" }],
    email: [
      { required: true, message: "Please enter email" },
      {
        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        message: "Please enter valid email"
      }
    ],
    phone: [{ pattern: /\d/, message: "Please enter valid phone number" }]
  };

  mounted() {
    this.setAsinId(this.$route.params.asin_id);
    this.setSuffix(this.$route.params.suffix);
    this.initPage();
  }

  handleSubmit() {
    // newHaveDraw.open();

    (this.$refs.formCustom as Form).validate(valid => {
      if (valid) {
        this.customerInfoSave();
      }
    });
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

  initPage() {
    service.initPage().then(res => {
      if (res.code === 0) {
        this.setBrandName(res.data.brandName);
        this.setLogo(res.data.log);
      }
    });
  }
}
</script>

<style lang="scss">
.pc-index {
  //
  &__inner {
    margin-top: 40px;
    margin-bottom: 45px;

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
