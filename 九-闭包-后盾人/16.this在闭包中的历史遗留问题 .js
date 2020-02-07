let hd = {
    user:"后盾人",
    get:function(){
        return this.user//this指向hd对象
    },
    get2:function(){
        // this特殊  子函数找不到this
        let This = this
        return function(){
            return this.user
        }
    }
}
let a = hd.get2()
console.log(a())//这时候是在window环境执行这个函数，this就指向window