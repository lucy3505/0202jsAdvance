//暗示全局变量  imply global variable
//var a = 1;

//现象
function test() {
  var a = (b = 1);
}

test();
console.log(b); //1
