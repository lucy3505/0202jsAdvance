function test() {
  var arr = [];
  //var i=0
  for (var i = 0; i < 10; i++) {
    arr[i] = function () {
      console.log(i + "");
    };
  }
  return arr;
}

var myArr = test();
console.log(myArr);

for (var j = 0; j < 10; j++) {
  myArr[j]();
}
//?怎么打印出0-9  下个文件看答案7.js
