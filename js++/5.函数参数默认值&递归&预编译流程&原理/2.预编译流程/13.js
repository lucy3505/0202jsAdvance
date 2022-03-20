function test() {
  a = 1;
  function a() {}
  var a = 2;
  return a;
}
console.log(test()); //2
