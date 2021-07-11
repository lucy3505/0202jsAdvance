function Factory(name,age){
    this.name=name
    this.age=age
}
Factory.prototype.show=function(){
    console.log('show')
}
var a = new Factory("aa",11)

function fn(name,age){
    var obj={}
    obj.__proto__=Factory.prototype
    Factory.call(this,name,age)

    return obj
}
var b = fn('aa',12)