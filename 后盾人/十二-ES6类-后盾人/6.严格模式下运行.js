//类中自动运用了严格模式

function User() {
}
User.prototype.show = function () {
  function test() {
    console.log(this)
  }
  test()
}
let u = new User()
u.show()//window

class User2 {
  show() {
    function test() {
      console.log(this)
    }
    test()
  }
}

let u2 = new User2()
u2.show()//undefined