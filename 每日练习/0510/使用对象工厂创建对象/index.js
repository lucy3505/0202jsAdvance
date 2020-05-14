function User(name,age){
    this.name=name
    this.age = age
}

User.prototype.show = function(){
    console.log("show")
}

let user = new User('user',18)

function admin(name,age){
    const obj={}
    obj.__proto__ = User.prototype
    // obj.name = name
    // obj.age = age
    User.call(instance,name,age)//!


    return obj

}

let xy = admin('user',18)