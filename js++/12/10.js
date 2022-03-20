function init() {
  initComput();
}

var initComput = (function () {
  var a = 1,
    b = 2;
  function add() {
    console.log(a + b);
  }
  function minus() {
    console.log(a - b);
  }
  function mul() {
    console.log(a * b);
  }
  function div() {
    console.log(a / b);
  }
  return function () {
    add();
    minus();
    div();
    mul();
  };
})();

//按需来，就写成这种不立即启动的方式
initCompute();

//插件方式，一来就要启动的话就用下面这种插件方式
(function () {
  var Slider = function (opt) {};
  Slider.prototype = {};
  window.Slider = Slider;
})();

var slider = newSlider({});
