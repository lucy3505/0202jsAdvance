for (let i = 1; i < 3; i++) {//i执行4次，只是最后依次没有执行for里面的console
    console.log(i)
    
}

//^for循环是有块的特性的，上面的代码会有4个块，只不过最后一个块没有执行console.log的代码而已
//因为var没有块的特性，所以这个i定义到window里去了，所以在外面打印i也是可以打印的，所以每次改i都是改变的全局的i，当换成let的时候，let有块的特性，就定义到块里面了，所以在外面就访问不到i了，window.i不可以
console.log(i)//4

for (let i = 1; i < 3; i++) {//i执行4次，只是最后依次没有执行for里面的console
    setTimeout(function(){//产生了4个函数，因为有4个作用域，i还没走到全局作用域，在块级作用域里就找到了i，如果用var  打印出来的就是3个4
        console.log(i) 
    }, 1000);
        
        
}

//大多都是用let,很少用全局作用域
