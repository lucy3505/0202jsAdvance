Professor.prototype = {
  name: "mr.zhang",
  tSkill: "java",
};
function Professor() {
  this.p = "p";
}
var professor = new Professor();

Teacher.prototype = professor; //相当于没有自己的prototype了
Teacher.prototype.name = "teacher"; //这样同时也改变了professor

function Teacher() {
  this.name = "mr.wang";
  this.mskill = "js/jq";
}

var teacher = new Teacher();

Student.prototype = teacher;
function Student() {
  this.name = "mr.li";
  this.pSkill = "html";
}
var stu = new Student();

//如果只想继承老师，但是老师又继承了professor,但其实我们是不要professor的

console.log(stu);
console.log(professor);

//目标是有自己的prototype,同时Prototype继承了别人的prototype,别人的prototype又继承了别人的prototype
