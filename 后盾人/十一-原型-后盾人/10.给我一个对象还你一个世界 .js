//给我一个对象我可以生成新的对象，例如：

function User(name){
    this.name = name,
    this.show = function(){
        console.log(this.name)
    }
}
let hd = new User('后盾人')
console.log(hd)
function createByObject(obj,...args) {
    // const constuctor = obj.__proto__.constructor
    const constuctor = Object.getPrototypeOf(obj).constructor
    console.log(constructor == User)
    return new constructor(...args)
}
let xj = createByObject(hd,'湘军')
xj.show()

//*所以如果要改变原型，别忘了把constructor给添上
User.prototype = {
    constructor:User,
    show(){
        console.log(this.name)
    }
}