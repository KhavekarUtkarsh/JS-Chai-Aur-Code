// class user{
//     constructor(userName , email , password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeuserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new user("utkarsh" , "uk@gmial.com" , "123")
// console.log(chai.encryptPassword())
// console.log(chai.changeuserName())





// Behind the Scene

function User(userName , email , password){
    this.userName = userName
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeuserName = function(){
    return `${this.userName.toUpperCase()}`
}



const tea = new User("utkarsh" , "uk@gmial.com" , "123")
console.log(tea.encryptPassword())
console.log(tea.changeuserName())