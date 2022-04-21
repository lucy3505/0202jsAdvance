var arr1 = [12, 13];
var arr2 = [14, 15];
var o = [arr1, arr2];

const a1 = o.b;
const i = Array.prototype.indexOf.call(o, arr2);
console.log(i);
