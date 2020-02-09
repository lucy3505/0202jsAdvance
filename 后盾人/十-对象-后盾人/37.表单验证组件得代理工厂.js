"use strict"
class Validate{
    max(value,len){
        return value.length<len
    }
    min(length,len){
        return length > len
    }
    isNumber(value){
        return /^d+$/.test(value)
    }
}
function ProxyFactory(target){
    return new Proxy(target){
        get(){}
        set(){}
    }
}