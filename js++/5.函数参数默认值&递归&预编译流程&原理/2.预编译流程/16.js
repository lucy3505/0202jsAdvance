// typeof a="undefined"
// +undefined=NAN
if (typeof a && -true + +undefined + "") {
  console.log("pass");
} else {
  console.log("not pass");
}
// -true; //-1

if (1 + 5 * "3" === 16) {
  console.log("pass");
} else {
  console.log("not pass");
}
console.log(!!" " + !!"" - !!false || "not pass"); //1
console.log(!!" ");

window.a || (window.a = "1");
console.log(window.a);
//||前面的window.a不是undefined，是'1',因为()的优先级大于||
