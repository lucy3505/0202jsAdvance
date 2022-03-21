const channel = new MessageChannel();

const { port1, port2 } = channel;
const oTitle = document.querySelector("h1");

port1.onmessage = function (e) {
  oTitle.textContent = e.data;
  // console.log("dom 已经修改");
  port1.postMessage("dom 已经修改");
};
export default port2;
