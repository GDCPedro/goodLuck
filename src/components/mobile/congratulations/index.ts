import Congratulations from "./congratulations.vue";
import { IRewardItem } from "@/api/types";
let div: HTMLDivElement;

class NewCongratulations {
  open(awardInfo: IRewardItem, defaultTask?: number) {
    div = document.createElement("div");
    const child = document.createElement("div");
    div.appendChild(child);

    const congratulations = new Congratulations({
      propsData: {
        awardInfo,
        defaultTask: defaultTask || 1
      }
    });

    congratulations.$mount(child);
    document.body.appendChild(div);
  }

  close() {
    div && div.remove();
    document.body.className = "";
  }
}

export default new NewCongratulations();
