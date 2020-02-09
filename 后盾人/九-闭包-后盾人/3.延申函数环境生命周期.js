function hd(){
    let n = 1;
    function sum(){//sum的内存空间还没有开辟
    let title = "后盾人"
        console.log(++n)
    }
    sum()//开劈了内存空间  有变量title
}
//函数没被调用就不会开辟内存空间，只是个计划
hd()//开辟内存空间，有两个变量，sum和n，存在hd环境中
hd()
hd()//因为都是开辟新的内存空间，所以打印出的n都是2,唯一的办法是把里面的变量n保留下来
//?怎么把n保留下来
//就是让外面的数据一直在用，也就是全局变量一直拿着
function hd(){
    let n = 1;
    // return n//返回n不行，只是把n的值给了外部
    return function sum(){//sum省略也可以
    
        console.log(++n)
    }
  
}
let a = hd()//!里面的n就保留了，相当于把hd里的变量地址给了a，a是要在外部被使用的，所以hd开辟的内存空间就不会被清楚，里面的变量也就都被保留了下来。n和sum是个大家庭，整个hd里的变量会一起被保留，不能return n 这样只是返回了值
a()//2
a()//3

let b = hd()//调1次函数就会得到一个新的内存地址空间
b()//2
b()//3

let c = hd()
c()//2
c()//3

function hd(){
    let n = 1;
    
    return function sum(){//sum省略也可以
        let m = 1
        function show() {
            console.log(++m)
        }
       show()
    }
  
}

let a = hd()
a()
a()
//?m会被累加吗
//不，因为m在最内层，没有被外部变量所引用，每次调用都是开辟新的内存空间
function hd(){
    let n = 1;
    
    return function sum(){//sum省略也可以
        let m = 1
        return function show() {
            console.log(++m)
            console.log(++n)
        }
    //    show()  把show执行给取消了，换成在外部执行这个函数
    }
  
}

let a = hd()()  //!把show函数保留了，那么show函数的父级作用域都会被保留，也就是sum和hd里的变量都是被保留，所以n也是一直存在的
a()
a()

//一句话：如果我这环境定义的数据在被使用，它就不删，就是说这函数在被外部使用