import React from './react'

//可能渲染的是jsx语法
let element = <div name="xxx">hello2<span>123</span></div>
//babel会编译成：
//React.createElement('div',{name:'xxx'},'hello',React.createElement('span',null,123))
//所以我们要写个createElement这个方法
// console.log(element instanceof Element)

console.log(element)
// React.render('hello1',document.getElementById('root'))
React.render(element,document.getElementById('root'))