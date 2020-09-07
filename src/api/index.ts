import { IInfoRes, IRewardList, IGot, ISubmit, IInitReturn } from "./types.d";
import request from "@/utils/request";
import store from "@/store/index";

class Service {
  /**
   * 接口共用的
   */
  // eslint-disable-next-line
  get asin_id() {
    // eslint-disable-next-line
    return store.state.asin_id;
  }

  // eslint-disable-next-line
  get user_id() {
    // eslint-disable-next-line
    return store.state.user_id;
  }

  /**
   * 用户个人信息提交
   */
  customerInfoSave(params: {
    // eslint-disable-next-line
    order_id: string;
    name: string;
    email: string;
    phone?: string;
  }): Promise<IInfoRes> {
    return request.post("/api/warranty/customer_info_save", {
      ...params,
      // eslint-disable-next-line
      asin_id: this.asin_id
    });
  }

  /**
   * 奖品列表
   */
  getWarrantyGoods(): Promise<IRewardList> {
    return request.post("/api/warranty/goods", {
      // eslint-disable-next-line
      asin_id: this.asin_id
    });
  }

  /**
   * 开始转
   */
  warrantyBegin(): Promise<IGot> {
    return request.post("/api/warranty/begin", {
      // eslint-disable-next-line
      asin_id: this.asin_id,
      // eslint-disable-next-line
      user_id: this.user_id,
      noLoading: true
    });
  }

  /**
   * 地址提交
   */
  warrantySubmit(formData: FormData): Promise<ISubmit> {
    formData.append("user_id", this.user_id);
    return request.post("/api/warranty/submit", formData);
  }

  /**
   * 初始化系统
   */
  initPage(): Promise<IInitReturn> {
    return request.post("/api/code/activity_check");
  }
}

export default new Service();
