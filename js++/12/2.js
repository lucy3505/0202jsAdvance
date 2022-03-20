//要看有没有constructor  才会显示这个对象是哪个函数构造出来的
Professor.prototype.name = "mr.zhang";
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
