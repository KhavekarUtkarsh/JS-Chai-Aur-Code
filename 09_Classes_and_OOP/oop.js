// Object Literal is nothing but Literally Creating a Object.

const user = {
    userName : "UK",
    loginCount : 3,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database.")
        // console.log(`Username: ${userName}`) // If we write like this then we get error. Because here we have to tell that take the value from this Object. So here we have to use "this" keyword.

        // console.log(`Username: ${this.userName}`)

        // console.log(this) // If we print "this" then we get the values of Current Context.
    }
}

// console.log(user.userName)
// console.log(user.getUserDetails())



// If we want to create multiple such objects then we are not going to write the whole things again for everyone.
// Instead we use Constructor.

// Example

// const promiseOne = new Promise()
// const date = new Date()

// Here "new" keyword is nothing but Constructor Function.
// This allows you to create multiple objects / object literals from one Object.


function User(username , loginCount , isLogggedIn){
    // username = username   // This will create confusion that which is passing the value and which one is taking. So for that-

    this.username = username  // Here left side is a "Variable" and the Right Side is the value we are passing.

    this.loginCount = loginCount

    this.isLogggedIn = isLogggedIn

    return this  // If we write this line or not does not affect the Ouput because if we have not written then also it is by default return values.
}

// const userOne = User("UK" , 1 , true)  // This will return the values that we have passed(don't look for all other output of "this").

// const UserTwo = User("Boss" , 11 , false) // But if we make another userTwo and not called it, but it will overwrite the values. SO to avoid this we use "new" keyword everytime. 

const userOne = new User("UK" , 1 , true)

const userTwo = new User("BOSS" , 11 , false)

console.log(userOne)
console.log(userTwo)  // And also using "new" it will not give the all extra part of "this".




// Whenever we use "new" keyword, 

// 1) an empty Object is created, which is called as "Instance".
// 2) then a Constructor function get called due to new keyword.
// 3) then all the arguments available are packed in it ("this") and returns it.
// 4) we get all of them.