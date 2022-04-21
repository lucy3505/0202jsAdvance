// function test(){
//   this.a=1//window.a=>全局 var a=1
//   console.log(this)
//   console.log(this.a)
// }

var a = 1;

function test() {
  "use strict";
  console.log(this);
  console.log(this.a);
}

test();
