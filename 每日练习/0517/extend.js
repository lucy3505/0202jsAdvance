function extend(Son,Parent){
    Son.prototype=Object.create(Parent.prototype)
    Object.defineProperty(Son.prototype,"constructor",{
        value:Son,
        enumerable:false
    })
}