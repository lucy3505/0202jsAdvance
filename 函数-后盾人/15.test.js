
name="这是window的name"
function hd(){
    let obj = {
    name:'后盾人',
    show:function(){//!这个函数属于对象属性的，所以称为方法
            function render(){//!这个就是个普通函数
                console.log(this)//this:window
                console.log(this.name)//会打印出window的name
            }
            render()
        console.log(this)
        return obj.name
    }
};
}
hd.obj={
    name:'后盾人',
    show:function(){
            function render(){
                console.log(this)//this:window
                console.log(this.name)//会打印出window的name
            }//函数定义的时候不能用Bind
            render.bind(this)()//!函数执行的时候用bind
            render.call(hd.obj)
        console.log(this)
        return this.name
    }
};

console.dir(hd.obj.show())//!this找的是.之前的对象，只找一个.
