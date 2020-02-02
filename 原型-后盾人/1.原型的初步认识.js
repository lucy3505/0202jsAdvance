     let arr = ["后盾人"]

        console.log(arr.concat('houdunre.com'))
        // arr.__proto__就是它的父亲，称为原型
        //父亲有concat的能力
        //arr.__proto__.__proto__就是爷爷
        //arr有3代
        let hd = {}
        console.log(hd)
        //hd就两代，自己和父亲  


        //*普通对象就2代，这就是原型  这样一个体系


        let xj = {}
        console.log(xj)
        //它和hd是同一个父亲
        console.log(Object.getPrototypeOf(hd))//获取hd的父亲
        console.log(Object.getPrototypeOf(hd) == Object.getPrototypeOf(xj)) //true