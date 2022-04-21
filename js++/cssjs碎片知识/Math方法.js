let res = 40 * Math.random();
//[0,1)这之间的随机数
console.log(res);

//10 40=>40-10=30=>30*Math.random[0,1)=>10+[0,30)
console.log(10 + (40 - 10) * Math.random());
var x = 100 * Math.random();
if (x <= 1) {
  console.log("first level");
} else if (x <= 3) {
  console.log("second level");
} else {
  console.log("感谢参与");
}
