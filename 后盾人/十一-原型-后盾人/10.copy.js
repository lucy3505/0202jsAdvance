//给我一个对象我可以生成新的对象，例如：

function User(name){
    this.name = name,
    this.show = function(){
        console.log(this.name)
    }
}
let hd = new User('后盾人')
function CreateObj(obj,...args){
    // const constructor=Object.getPrototypeOf(obj).constructor
    const constructor=obj.constructor
    return new constructor(...args)
}
let xj=CreateObj(hd,'xj')
console.log(xj)