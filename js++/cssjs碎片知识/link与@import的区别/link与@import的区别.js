 link @import
 1.从属关系不同：link-html标签  RSS  rel 关联属性设置  
                @import  CSS关键字

2.加载顺序不同
  link   引入CSS  同时记载
  @import 页面加载完毕后被加载

3.兼容性：
  link 不存在兼容性
  @import css2.1  IE5+

4.dom操作
 link是可以通过DOM进行操作的
 @import 不行

5、link 引入的样式权重大于@import引入的样式  ？？？
  不对 -权重没有关系 @import都是会在最顶部去写入  ，后面的样式就会覆盖
