import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export interface StoreState {
  EMAIL: string;
  COMPANY_NAME: string;
  // eslint-disable-next-line
  asin_id: string;
  // eslint-disable-next-line
  user_id: string;
  suffix: string;
  userInfo: {
    userName: string;
    userEmail: string;
    userPhone: string;
    userOrderId: string;
  };
  logo: string;
}

const state: StoreState = {
  userInfo: JSON.parse(
    sessionStorage.getItem("userInfo") ||
      JSON.stringify({
        userName: "",
        userEmail: "",
        userPhone: "",
        userOrderId: ""
      })
  ) || {
    userName: "",
    userEmail: "",
    userPhone: "",
    userOrderId: ""
  },

  // eslint-disable-next-line
  asin_id: sessionStorage.getItem("asin_id") || "",
  // eslint-disable-next-line
  user_id: sessionStorage.getItem("user_id") || "",
  suffix: sessionStorage.getItem("suffix") || "",
  EMAIL: "Support@meetdeals.com",
  COMPANY_NAME: sessionStorage.getItem("COMPANY_NAME") || "",
  logo: sessionStorage.getItem("logo") || ""
};

export default new Vuex.Store({
  state,
  mutations: {
    SET_ASIN_ID(state, id: string) {
      // eslint-disable-next-line
      state.asin_id = id;
      sessionStorage.setItem("asin_id", id);
    },
    SET_USER_ID(state, userId: string) {
      // eslint-disable-next-line
      state.user_id = userId;
      sessionStorage.setItem("user_id", userId);
    },
    SET_SUFFIX(state, suffix: string) {
      state.suffix = suffix;
      sessionStorage.setItem("suffix", suffix);
    },
    SET_USER_INFO(
      state,
      info: {
        userName: string;
        userEmail: string;
        userPhone: string;
        userOrderId: string;
      }
    ) {
      state.userInfo = info;
      sessionStorage.setItem("userInfo", JSON.stringify(info));
    },
    SET_BRAND_NAME(state, brand: string) {
      state.COMPANY_NAME = brand;
      sessionStorage.setItem("COMPANY_NAME", brand);
    },
    SET_LOGO(state, logo) {
      state.logo = logo;
      sessionStorage.setItem("logo", logo);
    }
  },
  actions: {},
  modules: {}
});
