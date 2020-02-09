//服务的范围：作用域

let title = "后盾人" //全局变量
//?保存后，从上到下执行后,会被删掉吗
//^不会,因为js是与用户沟通的平台
console.log(title)

function hd(){
    alert(title)//作用范围，全局定义的变量在函数里也有效
} 
//这个函数后面会被用到，如果用户点击按钮的话，所以这里的资源是会被用到的
document.querySelector('button').addEventListener('click',hd)
//!JS全局环境中，所有的数据都是会被保留的,全局环境不会回收，只定义一个变量也是一样的，例如只有下面这一行代码
let a = 1
//^一样会被保留，控制台如果打印是可以打印出来的，可以在控制台用

//作用范围：全局定义的变量在函数里也有效
/* 
对比php代码
<?php
    $title = "后盾人"
    function show(){
        echo $title
    }
    show()  //找不到title


 */