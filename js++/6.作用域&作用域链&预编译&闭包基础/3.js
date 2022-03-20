function test1() {
  var n = 100;
  function add() {
    n++;
    console.log(n);
  }
  function reduce() {
    n--;
    console.log(n);
  }
  return [add, reduce];
}
var arr = test1();
arr[0]();
arr[1]();
