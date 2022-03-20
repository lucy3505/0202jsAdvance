//6.js的另一种写法
function Teacher() {
  this.name = "mr.wang";
  this.mskill = "java";
}
Teacher.prototype = {
  pSkill: "js/jq",
};

var teacher = new Teacher();
function Student() {
  this.name = "wang";
}

function Buffer() {}
Buffer.prototype = Teacher.prototype;
var b = new Buffer();
Student.prototype = b;
Student.prototype.age = 18;

var s = new Student();
console.log(s);
