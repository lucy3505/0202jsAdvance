function extend(Son,Parent){
    Son.prototype = Object.create(Parent.prototype)
    Object.defineProperty(Son.prototype,"construcotr",{
        value:Son,
        enumberable:false
    })
}