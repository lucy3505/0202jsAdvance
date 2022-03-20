//ASCII码 表1  0-127  表2 128-255
// 1个字节  byte
//UNICODE码  涵盖ASCII码  2个字节
// var str = "哈哈";
// var pos = str.charCodeAt(0);
// console.log(pos);
//写一个函数，接受任意一个字符串，算出这个字符串的总字节数
function cal(str) {
  let sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) <= 255) {
      sum += 1;
    } else {
      sum += 2;
    }
  }
  console.log(sum);
}
cal("1哈哈");
