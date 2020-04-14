let Request = {
    set token(value) {
        localStorage.setItem('token', value)
    },
    get token() {
        let token = localStorage.getItem('token')
        if (!token) {
            alert('please login first')
        } else {
            return token
        }
    }
}