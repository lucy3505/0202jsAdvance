function User(name, age) {
    let data = { name, age }
    function info() {
        var info = data.age < 20 ? '少年' : '中年'
        return info
    }
    this.show = () => {
        console.log(data.name + " is:" + info())
    }
}

const user = new User('user1', 18)
user.show()