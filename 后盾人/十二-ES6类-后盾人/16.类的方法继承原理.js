//类的继承
function User() {}
User.prototype.show = function () {
  console.log("jj");
};
function Admin() {}
Admin.prototype = Object.create(User.prototype);
console.dir(Admin);
let hd = new Admin();
hd.show();
class User {
  show() {
    console.log("jj");
  }
}

class Admin extends User {}

let hd = new Admin("xiangjun");
hd.show();
