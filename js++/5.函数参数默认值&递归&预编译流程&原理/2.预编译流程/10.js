a = 1;
function test() {
  console.log(a); //undefined
  a = 2;
  console.log(a); //2
  var a = 3;
  console.log(a); //3
}

test();
var a;
