//通过show方法返回我们的课程列表。在每个课程前面加上后盾人
let lesson = {
    site:"后盾人",
    lists:["js","css","mysql"],
    show:function(){//因为这个函数是我们的类方法，因为把这个函数赋值给了这个属性
       console.log(this.site)//this就指向当前对象，可以读到对象里的site，this.show也是可以的
       const self = this //旧方式：使得作用域当中得this传到函数当中
       return this.lists.map(function(value){
           console.log(this)//这只是普通函数,所以this指向了window,这里读不到site 
           //?怎么读到site
           //^第一种方法：const self = this 作用域的方法
           console.log(self)//作用域链的方法：self就是当前对象
           console.log(this)//this是不会自己向上找的(特殊)，只要不是类方法，this就是指向window
           //?有没有办法让this也想上找？箭头函数
           return `${self.site}-${value}`
           return `${this.site}-${value}`
       },this)//^第二种方法：有些函数提供第二个参数，例如map函数就提供第二个参数，第二个参数可以传一个值.例如：{a:'houdunren'},会把这个对象赋值给当前这个函数得作用域得this,这时候map函数里得function得this就会变成{a:'houdunren'},把{a:'houdunren'}变为this传进去，这时候this就指向了‘后盾人’这个对象.
       //但这个参数是有得方法有有得是没有得
       //有些特殊函数可以使用传递this改变函数中得this
    }

}
console.log(lesson.show())