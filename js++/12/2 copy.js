Professor.prototype = {
  name: "mr.zhang",
  tSkill: "java",
};
function Professor() {
  this.p = "p";
}
var professor = new Professor();

Teacher.prototype = professor;
function Teacher() {
  this.name = "mr.wang";
  this.mskill = "js/jq";
}

var teacher = new Teacher();

console.log(teacher);
console.log(professor);
