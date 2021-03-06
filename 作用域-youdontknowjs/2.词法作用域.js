/* 
    ``作用域共有两种主要的工作模型
    1.词法作用域（最为普遍）
    2.动态作用域

    编译器的第一个工作阶段叫做词法化（也叫单词化）
            词法化的过程会对源代码中的字符进行检查，如果是有状态的解析过程，还会赋予单词语义。
            简单说，词法作用域就是定义在词法阶段的作用域。
            ^换句话说，词法作用域是由你在写代码是将变量和块作用域写在哪里来决定的
            每个函数都会创建一个新的作用域气泡
            *无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定
            词法作用域查找只用查找一级标识符，如果代码中引用了foo.bar.baz,词法作用域查找只会视图查找foo标识符，找到这个变量后，对象属性访问规则会分别接管对bar和baz属性的访问

            ``小结
            词法作用域意味着作用域是由书写代码时函数声明的位置来决定的。编译的词法分析阶段基本能够知道全部标识符在哪里以及是如何声明的，从而能够预测在执行过程中如何对他们进行查找
            


 */