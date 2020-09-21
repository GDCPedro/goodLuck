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
    console.log(div);

    div.remove();
    console.log(222);

    document.body.className = "";
  }
}

export default new NewHaveDraw();
