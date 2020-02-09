for (var i = 1; i < 3; i++) {
    console.log(i)
     setTimeout(function(){
        console.log(i) 
    }, 1000);
}

//var只有全局作用域，没有块级作用域

for (var i = 1; i < 3; i++) {
   (function(i){//让函数立即执行，把i传到里面，前面说到函数是由作用域的，函数每次执行都产生一个作用域，模拟出一个块级作用域
        setTimeout(function(){
        console.log(i) 
    }, 1000);
   })(i)
}
