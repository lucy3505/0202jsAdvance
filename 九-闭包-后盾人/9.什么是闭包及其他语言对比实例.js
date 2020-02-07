//闭包：函数可以访问其他函数作用域当中的数据就成为闭包

function hd(){
    let n = 1
    return function sum() {
        console.log(++n)
    }
}
let a = hd()
a()
a()

<?php
    function hd(){
        $n=1
        function sum(){
            echo $n
        }
        sum()
    }
    hd() //sum里面的n无法访问外部的n，但js就可以，子函数可以访问其他函数作用域里的数据成为闭包