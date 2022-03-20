var inherit = (function () {
  function Buffer() {}
  return function (Target, Origin) {
    Buffer.prototype = Origin.prototype;

    Target.prototype = new Buffer();
    Target.prototype.constructor = Target;
    Target.prototype.super_class = Origin;
  };
})();

var initProgrammer = (function () {
  var Programmer = function () {};
  Programmer.prototype = {
    name: "程序员",
    tool: "计算机",
    work: "编写应用程序",
    duration: "10",
    say() {
      console.log(
        `我是一名${this.myName}${this.name},我的工作是用${this.tool}${this.work}，我每天工作需要用到${this.duration}`
      );
    },
  };
  function FrontEnd() {}
  function BackEnd() {}
  inherit(FrontEnd, Programmer);
  inherit(BackEnd, Programmer);
  FrontEnd.prototype.lang = ["html"];
  FrontEnd.prototype.myName = "前端";
  BackEnd.prototype.lang = ["node"];
  BackEnd.prototype.myName = "后端";
  return {
    FrontEnd,
    BackEnd,
  };
})();

var frontEnd = new initProgrammer.FrontEnd();
var backEnd = new initProgrammer.BackEnd();
frontEnd.say();
