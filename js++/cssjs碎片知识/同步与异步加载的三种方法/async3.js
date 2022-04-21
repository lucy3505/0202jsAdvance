function init_modules() {
  initCompute();
}

var initCompute = (function () {
  console.log("init");
  var oDiv = document.getElementsByTagName("div")[0];
  function init() {
    bindEvent();
  }
  function bindEvent() {
    oDiv.addEventListener("click", btnClick, false);
  }

  function btnClick(e) {
    var e = e || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase(),
      first = Number(document.getElementById("first").value),
      second = Number(document.getElementById("second").value);

    if (tagName === "button") {
      var field = tar.getAttribute("data-field");
      switch (field) {
        case "plus": {
          console.log(utils.plus(first, second));
        }
        case "minus": {
        }
        case "mul": {
        }
        case "div": {
        }
      }
    }
  }
  return function () {
    init();
  };
})();
