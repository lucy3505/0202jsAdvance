

let hd = ()=>{
    console.log('后盾人')
}

let lesson = {
    site:'后盾人',
    lists:["js","css","mysql"],
    show:function(){
        // const self = this
        return this.lists.map(value=>{
            // return `${self.site}-${value}`
            console.log(this)//!换成箭头函数后，this就指向了上下文(指向父级作用域当中得this)
            return `${this.site}-${value}`

        })
    }
}

console.log(lesson.show())

 
 
