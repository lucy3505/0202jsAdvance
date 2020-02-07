
//所谓环境，可以理解为一块内存的数据
let title = "后盾人"//影响范围为全局
function show(){
    let url = "houdunren.com"
}
show()//调用后会执行里面的代码，计算机会开辟一个环境，函数的范围环境，说白了，计算机开辟一段内存空间
//在show的环境中有个变量url，url属于show环境的，作用范围在show函数里面，全局环境是用不了的，例如下面：
console.log(url)//报错，找不到
//总结：函数执行就会开辟一个新的内存空间（执行环境），里面的数据放的是函数定义的数据，这个数据的作用范围就是函数体，//^默认情况下是函数体内可以使用
//因为上面的特性，所以函数执行后就会被清理掉，调一次给一个环境。
//所以执行两次函数，两次是不同的

function show(){//这时候show里面有两个变量url和hd
    let url = "houdunren.com"//^url的作用域是整个show里面，包含hd函数
    function hd(){//site的作用域是在hd里面
    //子函数可以使用父级的变量
        let site = "hdcms"
        console.log(site)
        console.log(url)//*可以访问
    }
   
    hd() 
    console.log(site)//无法访问

    //*函数里面定义的数据，其作用域是函数及其子函数中，里面定义的数据不会向父级传递
}