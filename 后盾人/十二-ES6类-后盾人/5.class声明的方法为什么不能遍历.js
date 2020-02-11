//看个细节:类中声明的函数,属性不会被遍历。遍历的时候不大喜欢遍历到原型中的方法，所以class把方法都设置成不能遍历
function Hd(){}
Hd.prototype.show=function(){}
console.log(Hd)
let h = new Hd(

)
for(const key in )