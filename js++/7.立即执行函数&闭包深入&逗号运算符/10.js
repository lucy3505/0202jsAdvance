var a = 10;
if (function b() {}) {
  a += typeof b;
}

console.log(b);

//! ()表达式里的东西运行过后会即可销毁，也就找不到b了
