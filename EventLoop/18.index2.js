import port2 from "./18.demo";
(() => {
  port2.postMessage("this is new title");
  port2.onmessage = function (e) {
    console.log(e.data);
  };
})();
