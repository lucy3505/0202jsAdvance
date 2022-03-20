var fn = (function test1() {
  return 1;
},
function test2() {
  return "2";
})();

console.log(typeof fn);
