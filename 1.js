函数没有返回值默认返回undefind
使用 defineProperty方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable).Object.keys方法仅返回对象中 可枚举(enumerable) 的属性，


import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。
这是CommonJS中 require（）和 import之间的区别。使用 require() ，您可以在运行代码时根据需要加载依赖项。如果我们使用 require而不是 import ， running index.js， running sum.js， 3会被依次打印。

https://mp.weixin.qq.com/s/mkrkQ-_4At6ifCltycxHpQ