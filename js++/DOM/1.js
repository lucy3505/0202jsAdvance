DOm=>Document Object Model 文档对象模型
DOM 对象  ->宿主对象 //浏览器本身提供的，不再是Ecma提供

JavaScript
3种对象
1.本地对象：Native Object//和浏览器没有任何关系 
  Object Function Array String Number Boolean
  Error EvalError SyntaxError RangeError
  ReferenceError  TypeError URIError
  Date RegExp
  // 上面这些是本地对象


2.内置对象  Built-in Object

    Global Math//Global 全部内置对象的总称
    ECMA -> isNaN()  parseInt Number decodeURI encodeURI

    iNFINITY NaN undefined //全局对象的属性

    //!本地对象和内置对象都是ES的内部对象
3.宿主对象  Host Object
执行JS脚本的环境提供的对象，浏览器对象，兼容性问题//不同的浏览器要做兼容

浏览器对象  window(BOM)和document(DOM)-->DOM有w3c规范  DOM是在BOM里面的  但是DOM是有规范的  但BOM没有

DOM:通过浏览器提供的这一套方法表示或者操作HTML和XML
HTML/XML  和css无关
XML:自定义标签  是可以通过getElementsByTagName获取的
dom只能操作XML和HTML  无法操作css  操作的都是内联样式 而不是<style></style>的样式表 内联样式的优先级高

<person>
  <name>zhangsan </name>
  <sex></sex>
</person>
XML->XHTML->HTML
 
//标签和元素的区别 标签是tag名称  元素是标签及里面的东西
var person=document.getElementsByTagName("person")[0]
var name=person.getElementsByTagName("name")[0]
console.log(name)//得不到name元素  因为name是内置的一些属性


//事件

//onclick事件  每个元素都有