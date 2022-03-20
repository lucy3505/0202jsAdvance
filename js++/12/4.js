//如何让prototype等于别人的Prototype
function Teacher() {
  this.name = "mr.wang";
  this.mskill = "java";
}
Teacher.prototype = {
  pSkill: "js/jq",
};

var teacher = new Teacher();

Student.prototype = teacher;
function Student() {
  this.name = "mr.li";
  this.pSkill = "html";
}

Student.prototype = Teacher.prototype; //这里是没有继承Teacher，而是继承了teacher的原型
//3.js里面是继承了Teacher的实例对象，但如果实例对象又继承了别人，那么继承会成多层继承，如果只是想继承某一个
Student.prototype.age = 18; //!这会让teacher的protptype上也有age
var stu = new Student();

console.log(stu);
