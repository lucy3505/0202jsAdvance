//?如何使用父类的构造函数

function User(name, age) {
    this.age = age
    this.name = name
}
User.prototype.show = function () {
    console.log(this.name, this.age)
}


function Admin(...args) {
    User.apply(this, args)
}
Admin.prototype = Object.create(User.prototype)
Object.defineProperty(Admin.prototype, 'constructor'{
    value: Admin,
    enumerable: false
})
//上面两句相当于Admin.prototype.__proto__=User.prototype
//?把上面的继承封装一下
function extend(Son, Parent) {
    Son.prototype = Object.create(parent.prototype)
    Object.defineProperty(Son.prototype, 'constructor', {
        value: Son,
        enumerable: false
    })
}

//?另一种实现继承的方式  使用对象工厂来创建
function User(name, age) {
    this.name = name
    this.age = age
}
User.prototype.show = function () {
    console.log(this.name, this.age)
}

function admin(name, age) {//这样就直接把这个对象创建出来
    //?不通过new创建对象，而是执行函数创建对象，假设执行admin（name,age）就把对象创建出来
    //不通过new创建对象，那就自己造一个然后返回这个对象
    let hd = admin('hhhh', 18)

    function admin(name, age) {
        //自己创建一个对象，使用User构造函数和继承原型上的方法

        const instance = {}
        User.call(instance, name, age)
        instance.prototype.__proto__ = User.prototype
        //extend(instance.prototype,User.prototype)
        return instance
    }

    hd.show()
