var inherit = (function () {
  function Buffer() {}
  return function (Target, Origin) {
    Buffer.prototype = Origin.prototype;

    Target.prototype = new Buffer();
    Target.prototype.constructor = Target;
    Target.prototype.super_class = Origin;
    Object.defineProperty(Target.prototype, "constructor", {
      value: Target,
      enumerable: false,
    });
  };
})();

function Teacher() {
  this.name = "mr.wang";
  this.mskill = "java";
}
Teacher.prototype = {
  pSkill: "js/jq",
  age: "18",
};

// var teacher = new Teacher();

function Student() {
  this.name = "mr.li";
}

inherit(Student, Teacher);
var s = new Student();
console.log(s);
for (var i in s) {
  console.log(i);
}
