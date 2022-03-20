//call/apply的借用
//但是这样就访问不到Teacher.prototype
function Teacher(name, mSkill) {
  this.name = name;
  this.mSkill = mSkill;
}

function Student(name, mSkill, age, major) {
  Teacher.apply(this, [name, mSkill]);
  this.age = age;
  this.major = major;
}
const s = new Student("xx", "java", 18, "math");
console.log(s);
