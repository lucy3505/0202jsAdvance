const oMess1 = document.querySelector("#mess1");
const oMess2 = document.querySelector("#mess2");
const oBtn1 = document.querySelector("#btn1");
const oBtn2 = document.querySelector("#btn2");
const channel = new MessageChannel();
const { port1, port2 } = channel;
oBtn1.addEventListener("click", sendMessage1, false);
oBtn2.addEventListener("click", sendMessage2, false);
port1.onmessage = getMessage1;
port2.onmessage = getMessage2;

function sendMessage1() {
  port2.postMessage("i am port-1");
}

function sendMessage2() {
  port1.postMessage("i am port-2");
}

function getMessage1(e) {
  console.log(e);
  oMess2.textContent = e.data;
}

function getMessage2(e) {
  console.log(e);
  oMess1.textContent = e.data;
}
