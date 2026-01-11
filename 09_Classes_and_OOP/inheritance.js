class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`USERNAME is : ${this.userName}`)
    }
}

class Teacher extends User{
    constructor(userName , email , password){
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.userName}`)
    }
}

const chai = new Teacher("chai" , "chai@google.com" , "1a2b3c")
chai.addCourse()
chai.logMe() // Here as we have used "extends", it can access the methods of the 1st class.

const tea = new User("Masala Tea")
// tea.addCourse() // This willl throw error because it can't access the methods of the 2nd function.
tea.logMe()


console.log(chai === tea)  // This will give "false".
console.log(chai === Teacher)  // This will give "false".


console.log(chai instanceof Teacher)  // This will give "true".
console.log(chai instanceof User)  // This will give "true".