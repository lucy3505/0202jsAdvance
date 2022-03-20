//apply和call改变this指向
function Compute() {
  this.plus = function (a, b) {
    console.log(a + b);
  };
  this.minus = function (a, b) {
    console.log(a - b);
  };
}

function FullCompute() {
  Compute.apply(this);
  this.mul = function (a, b) {
    console.log(a * b);
  };
  this.div = function (a, b) {
    console.log(a / b);
  };
}

var compute = new FullCompute();
compute.plus(1, 2);
