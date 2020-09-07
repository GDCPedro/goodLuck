import axios from "axios";
import qs from "qs";
import { Message } from "view-design";
import store from "@/store/index";
import { isPC } from "@/utils/index";
import { Toast } from "vant";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: false,
  timeout: 30 * 1000
});

service.interceptors.request.use(
  config => {
    if (!config.data || !config.data.noLoading) {
      if (isPC()) {
        //
      } else {
        Toast.loading({
          duration: 0
        });
      }
    }
    // eslint-disable-next-line
    const file = (config as any).url.includes("warranty/submit");
    config.headers["Content-Type"] = file
      ? "multipart/form-data"
      : "application/x-www-form-urlencoded";

    // eslint-disable-next-line
    (config.headers as any)["activity-suffix"] = store.state.suffix;
    if (!file) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    // console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  resp => {
    Toast.clear();
    // TODO http异常代码处理
    // TODO 接口自定义请求异常处理
    if (resp.data.code !== 0 && resp.data.code !== 1001) {
      if (isPC()) {
        // eslint-disable-next-line
        (Message as any).error({
          content: resp.data.message,
          top: 200
        });
      } else {
        Toast.fail(resp.data.message);
      }
    }
    return Promise.resolve(resp.data);
  },
  error => {
    if (isPC()) {
      // eslint-disable-next-line
      (Message as any).error("Network Error!");
    } else {
      Toast.clear();
      Toast.fail("Network Error!");
    }
    // console.log("response error: ", error); // for debug
    return Promise.reject(error);
  }
);

export default service;
