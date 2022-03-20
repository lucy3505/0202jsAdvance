//初始化参数  默认值：undefined

function test(a = 1, b) {
  console.log(a);
  console.log(b);
}

//?要让a使用默认值，而b使用传进去的值要怎么写

test(undefined, 2); //1,2
