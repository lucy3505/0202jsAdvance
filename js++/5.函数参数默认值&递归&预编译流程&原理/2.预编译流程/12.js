function test() {
  return a;
  a = 1;
  function a() {}
  var a = 2;
}

console.log(test()); //function
