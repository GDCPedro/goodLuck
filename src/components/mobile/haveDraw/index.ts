import HaveDraw from "./index.vue";
let div: HTMLDivElement;

class NewHaveDraw {
  open() {
    div = document.createElement("div");
    const child = document.createElement("div");
    div.appendChild(child);

    const haveDraw = new HaveDraw();

    haveDraw.$mount(child);
    document.body.appendChild(div);
    // document.getElementById("app")!.appendChild(div);
  }

  close() {
    div && div.remove();
    document.body.className = "";
  }
}

export default new NewHaveDraw();
