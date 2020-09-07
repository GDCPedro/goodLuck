export interface IBaseRes {
  code: number;
  message: string;
}

export interface IInfoData {
  order_id: string;
  name: string;
  email: string;
  phone?: string;
}

/** 填写信息后返回的数据 */
export interface IInfoRes extends IBaseRes {
  data: {
    user_id: number;
  };
}

/** 奖品列表--单个奖品数据 */
export interface IRewardItem {
  image_url: string | undefined | any;
  title: string | undefined;
  id: string | number;
}

/** 奖品列表 */
export interface IRewardList extends IBaseRes {
  data: {
    list: Array<IRewardItem>;
  };
}

/** 得奖信息 */
export interface IGot extends IBaseRes {
  data: IRewardItem;
}

/** 提交信息后的返回 */
export interface ISubmit extends IBaseRes {
  data: any[];
}

export interface IInitReturn extends IBaseRes {
  data: {
    title: string;
    log: string;
    brandName: string;
    activity_mission_description: {
      facebook: string;
      amazon: string;
      three: string;
    };
    config: {
      button_color: string;
      top_color: string;
      bot_color: string;
    };
  };
}
