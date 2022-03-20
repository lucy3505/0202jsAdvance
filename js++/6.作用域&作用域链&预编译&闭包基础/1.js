function a(){
  function b(){
    function c()
    c()
  }
  b()
}
a()

// a定义：a.[[scope]]->0:go
// a执行：a.[[scope]]->0:a->ao
//                     1:go

// b定义：b.[[scope]]->0:a->ao
//                   ->1:go
// b执行：b.[[scope]]->0:b->ao
//                   ->1:a->ao
//                   ->2:go
// c定义：c.[[scope]]->0:b->ao
//                   ->1:a->ao
//                   ->2:go
// c执行：c.[[scope]]->0:c->ao
//                   ->1:b->ao
//                   ->2:a->ao
//                   ->3:go
// c结束：c.[[scope]]->0:b->ao
//                   ->1:a->ao
//                   ->2:go
// b结束：b.[[scope]]->1:a->ao
//                   ->2:go
//        c.[[scope]]  X    
// a结束：b.[[scope]]  X
//       a.[[scope]]->0:go
      

                  


