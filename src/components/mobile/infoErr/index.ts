import InfoErr from "./index.vue";
let div: HTMLDivElement;

class NewInfoErr {
  open() {
    div = document.createElement("div");
    const child = document.createElement("div");
    div.appendChild(child);

    const infoErr = new InfoErr();

    infoErr.$mount(child);
    document.body.appendChild(div);

    document.body.addEventListener("click", () => {
      this.close();
    });

    setTimeout(() => {
      div && div.remove();
    }, 2000);
  }

  close() {
    div && div.remove();
    document.body.className = "";
  }
}

export default new NewInfoErr();
