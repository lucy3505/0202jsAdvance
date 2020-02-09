//通过show方法返回我们的课程列表。在每个课程前面加上后盾人
let lesson = {
    site:"后盾人",
    lists:["js","css","mysql"],
    show:function(){
        let self = this
        let str=''
         this.lists.forEach(item=>str += `${this.site}${item},`)
        return str
    }

}
console.log(lesson.show())