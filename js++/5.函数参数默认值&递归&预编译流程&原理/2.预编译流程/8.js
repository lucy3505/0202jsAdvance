function test() {
  var a = (b = 1);
  console.log(b);
}

// go={
//   2.  b:1
// }

// ao={
//1.  a：undefined
//3   a=(b=1) ->a:1
// }
