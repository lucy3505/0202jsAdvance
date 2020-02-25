//15.对象浅拷贝:对象里的值是普通值，而不是对象（地址值）


let hd2 = {
  hd1: { name: "houdunren1" },
  hd3: { name: "houdunren3" },
}

let obj = {}
function repeat(hd) {

  for (const key in hd) {

    if (typeof hd[key] !== 'object') {
      debugger
      obj[key] = hd[key]


      // debugger
      return
    }
    else {
      debugger
      repeat(hd[key])
    }

  }
  // return obj

}
repeat(hd2)
console.log(obj)