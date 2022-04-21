const o = {
  num1: 1,
  num2: 2,
  add: function () {
    console.log(this.num1);
    return this.num1 + this.num2;
  },
};

const add = o.add;
console.log(add());

const num3 = o.add();
console.log(num3);
