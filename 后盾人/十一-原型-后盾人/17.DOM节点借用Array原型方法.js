//文档中有两个按钮，只要那个定义了class的按钮,DOM节点没有这个操作，但数组是有过滤这个操作的

let arr = [1, 3, 22]
arr.filter(item => item > 4)//*item=>item>4这个是参数且就一个参数，这个参数是引用类型而已,arr.filter说明是对象调用，所以call里面的第一个参数要是对象，不能为空
let btns = document.querySelectorAll('button')//为数组
btns.filter()
// [].filter.call(btns) 也是可以的，只要找到filter这个方法
Array.prototype.filter.call(btns, item => item.hasAttribute('class'))