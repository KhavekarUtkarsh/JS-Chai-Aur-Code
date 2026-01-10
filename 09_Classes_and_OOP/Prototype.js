let myName1 = "Utkarsh"
let myName2 = "Utkarsh      "

let myChannel = "Chai      "

// console.log(myName1.length)  // This will give 7.
// console.log(myName2.length)  // Now this will count White Spaces and give output as 13.

// So we have to avoid this , we want to make our own function named as "trueLength()" which will solve this problem.

// Answer is at very last.



let myHeros = ["Thor" , "Spiderman"]

let heroPower={
    thor : "Hammer",
    spiderman : "Sling",

    getSpidermanPower : function(){
        console.log(`Spidy Power is : ${this.spiderman}`)
    }
}

// Now we know we can create functions of our own like-
// heroPower.prototype.utkarsh()

// But can we create a function of our own in the "Object" of JS because it s the Superior of all like Array, String, Function , etc., so that we can use it for all. 
// THe answer is "YES"

Object.prototype.utkarsh = function(){
    console.log("utkarsh is present in all Objects")
}

// heroPower.utkarsh()

// So as we know all of the data types are under Object type, so can we access our Method by the array we have defined here? Let's check out.

// myHeros.utkarsh()  // So yes it also has access.


// Now if we create a function of our own for only Array then can we get access by the others like Object, String?

Array.prototype.heyUtkarsh = function(){
    console.log("Utkarsh says Hello!")
}

// myHeros.heyUtkarsh() // Obviously myHeros have it's access

// heroPower.heyUtkarsh()  // So answer is NO, because we have given our property for only Array not to the others.




// ++++++++++++++ Inheritance ++++++++++++++++++++++

const user ={
    name : "Chai",
    gmail : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const teachingSuppport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    // __proto__ : teachingSuppport  // Here we are giving reference of teachingSupport to the TASupport. Now whenever we are creating new Object of TASupport we can also acccess the teacingSupport.
}

// It is not necessary to take access from inside, we can also take from outside-

Teacher.__proto__ = user  // Now here Teacher can access all the properties of user.
// This is nothing but "Prototypal Inheritance." But this is old approach.


// ****** Modern Syntax *******

Object.setPrototypeOf(teachingSuppport , Teacher)

// Here we are directly accessing the main Object and the using "setPrototypeOf()" we are giving firstly who is gonna access and second whose properties.





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let anotherUserName = "Hitesh     "

String.prototype.trueLength = function(){
    console.log(`True Length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
"utkarsh".trueLength()
"iceTea".trueLength()