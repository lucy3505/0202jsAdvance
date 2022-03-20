Professor.prototype.tSkill = "JAVA";
function Professor() {}

var professor = new Professor();

// Teacher.prototype = professor;
function Teacher() {
  this.mskill = "js.jq";
  this.success = {
    alibaba: "20",
  };
}

var teacher = new Teacher();

Student.prototype = teacher;
function Student() {
  this.pSkill = "html";
}
var student = new Student();
console.log(student);
//原型的原型是由系统自带的Object构造出来的
// object只有__proto__
