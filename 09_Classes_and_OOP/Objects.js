function multiplyBy5(num){
    return num * 5
}

multiplyBy5(5)

multiplyBy5.power = 2

// console.log(multiplyBy5(5))  // This will give 25
// console.log(multiplyBy5.power)  // This give 2 as output.
// console.log(multiplyBy5.prototype)  // Here output is "{}" i.e. Empty Parenthesis.


// Here we are trying to say that in JS everyting is an Object.
// Means function is function but at the same time it is Object in JS.
// Also same for Array , String.



function createuser(userName , score){
    this.userName = userName
    this.score = score
}

// We can create our own methods/function by using Prototype, because Prototype also has it's own mwthods so we can also make our own.

createuser.prototype.increment = function(){
    this.score++  // Here we have to use "this" in order to tell this function that whoever calls him, increment it's value of score.
}

createuser.prototype.printMe = function(){
    console.log(`Price is : ${this.score}`)
}

// const chai = createuser("Chai" , 25)
// const tea = createuser("Tea" , 250)

// This will not run because we have not used "new" keyword so JS will not understand what to do.

const chai = new createuser("Chai" , 25)
const tea = new createuser("Tea" , 250)

chai.printMe()





/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/