// 检查是否是PC端打开的
export function isPC(): boolean {
  const userAgentInfo: string = navigator.userAgent;
  const Agents: Array<string> = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  //  是否是PC
  let flag = true;
  Agents.forEach((item: string): void => {
    if (userAgentInfo.includes(item)) {
      flag = false;
    }
  });
  // console.log(flag);
  return flag;
}

export function autoResize() {
  window.onresize = () => {
    if (!isPC()) {
      // 非PC
      document.getElementsByTagName("html")[0].style.fontSize =
        "13.33333333333333vmin";
    }
  };
}
