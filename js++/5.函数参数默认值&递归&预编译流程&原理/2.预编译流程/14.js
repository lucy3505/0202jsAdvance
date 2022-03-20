a = 1;
function test(e) {
  function e() {}
  arguments[0] = 2;
  console.log(e); //2
  if (a) {
    var b = 3;
  }
  var c;
  a = 4;
  var a;
  console.log(b); //undefined
  f = 5;
  console.log(c); //undefined
  console.log(a); //4
}
var a;
test(1);
d;
console.log(a); //1f
console.log(f); //5
// go={
//   a:undefined -> 1
//   test:function,
//   f:undefined
// }
// ao={
//   e:undefined,->1,->function e
//   a:undefined,->,->
//   c:undefined->,->

// }
