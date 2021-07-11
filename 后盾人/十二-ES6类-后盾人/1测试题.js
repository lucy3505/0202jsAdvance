// 题目：
// 现有 Json 数据，格式如下：
// json = { "a": [ { "b": "c" } , ... ] , ... };
// 请实现一个方法：get(json, "a[0].b")，使其返回值为 c。
// 要求：自己实现遍历逻辑，不允许使用正则表达式、不允许使用 eval()等类似
// 方法。
// 测试用例：
// json = { "a": [ { "b": "c" }, "d" ], "x": 1}
// get(json, "a[0].b") == "c"
// get(json, "a[1]") == "d"
// get(json, "x") == 1
let json = { "a": [ { "b": "c" }, "d" ], "x": 1,"xx":{"x2":{"x3": [ { "b": "c" }, "d" ]}}}

function get(json,arg){

 let adl = arg.split('.').length
 let l = arg.split('.')[0]
 if(adl === 1){

    if(l.split('[').length!==1){
      
      let ll = l.split('[')[0]
      arg = l.split('[')[1].split(']')[0]
      json = get(json,ll)
    }

      return json[arg]
    }
  if(adl !== 1){

    let r = arg.substr(l.length+1)
    if(l.split('[').length!==1){
     
      let ll = l.split('[')[0]
      let index = l.split('[')[1].split(']')[0]
      let r = get(json,ll)

      json=r[index]
    }else{
      json=json[l]
    }
    return get(json,r)
  
  }
}

console.log(get(json, "xx.x2.x3[0].b")) 
console.log(get(json, "x")) 
console.log(get(json, "a[0].b")) 
console.log(get(json, "a[1]")) 




