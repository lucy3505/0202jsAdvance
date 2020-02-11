


let common = {
  show() {
    console.log('common.show' + this.name)
  }
}

let hd = {
  __proto__: common,//让hd继承common
  show() {
    console.log(this)
    console.log('hd.show')
    //!hd也想使用上一级的方法，就会这么写，那这时候下面的第一个this就指向的xj这个对象，就产生死循环，所以这种方式两层的时候可以，多层的时候就不行了
    //产生的原因是：this扮演多重任务，第一个代表当前对象，第二个是通过this要攀升原型方法

    // this.__proto__.show.call(this)
    //为了解决这个问题就出现了super
    //*super只会原型攀升，而this仅代表当前调用的对象
    //所以这就是super产生的必要性
    //*super细节：只能show(){}这么调用，不可以show:function(){}  会报错，所以定义类的时候都是show(){}这么写
    super.show()
  }
}
//两个都是对象，使用__proto__来继承
let xj = {
  __proto__: hd,
  show() {
    // this.__proto__.show.call(this)
    super.show()
    console.log('xj.show')
  }
}