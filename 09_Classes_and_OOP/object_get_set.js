const User = {
    _email : "u@uk.com",
    _password : "abcde",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email)

// Here ".create" is an Factory Function, means it is default available function.