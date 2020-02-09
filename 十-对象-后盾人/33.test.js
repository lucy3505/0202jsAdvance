
//控制台打印直角*
function factorial(num){
    let sum = "*"
    if(num===1)return true
    sum+='*'
    console.log(sum)
    
    factorial(num-1)
}
