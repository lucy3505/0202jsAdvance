function Teacher() {
  this.name = "mr.wang";
  this.mskill = "java";
}
Teacher.prototype = {
  pSkill: "js/jq",
};

var teacher = new Teacher();

Student.prototype.__proto__ = Teacher.prototype;
Student.prototype.xx = "xx";
function Student() {
  this.name = "mr.li";
}

var s = new Student();
console.log(s);
console.log(s.pSkill);
