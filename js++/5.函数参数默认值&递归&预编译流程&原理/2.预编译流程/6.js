var a = 1;
function a() {
  console.log(2);
}
console.log(a);

//go global object全局上下文
//1.找变量声明
//2找函数声明
//3执行
// go={
//   a:undefined=>function a(){}=>1
// }
