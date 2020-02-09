

let hd = {name:'hd'}
let parent = {
    name:'parent',
    show(){
        console.log('parent method' + this.name)
    }
}
hd.__proto__=parent
hd.show()//parent method hd