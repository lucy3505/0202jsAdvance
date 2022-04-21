<p>课程Id:{{id}}</p>
<h2>课程名称:{{title}}</h2>
<p>课程价格：<span>{{originPrice}}<span style="color:red">{{currentPrice}}</span></span></p>
<p>
  优惠券:<span style="color: red">{{coupon}}</span>
</p>
<button class="remove-btn" {{disabled}} data-id="{{id}}">删除</button>
<hr />
