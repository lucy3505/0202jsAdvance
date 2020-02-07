
let arr = [ ]
for (let i = 1; i <= 3; i++) {
   arr.push(function(){return i})//把函数都放到了外部的数组中，那么这个块级作用域里的i也就被存起来了
}

console.log(arr[1]())

for (var i = 1; i <= 3; i++) {
    (function(i){
        arr.push(function(){return i})//把函数都放到了外部的数组中，那么这个块级作用域里的i也就被存起来了
    })(i)
  
}