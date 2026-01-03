// The data types are of two categories bt Standard as Primitive and Non-Primitive

// Primitive Data Types - Call by Value (means whenever you assign a primitive value to a variable, it stores the actual value)

// There are 7 types - String, Number, Boolean, Null, Undefined, Symbol, BigInt



// JavaScript is a dynamically typed language because the type of a variable is determined at runtime, not at compile time.
// This means you don't have to declare the type of a variable when you create it, and the type can change as the program runs.

// Example: const number=100;
            // const number = 100.3;  // In JS it is considered as only Number.
            

            // const id= Symbol("123")
// const anotherId= Symbol("123")
// Here though we are given same numbers, their values are different, this is why we use Symbol in order to maintain the Uniqueness of given values.
// console.log(id === anotherId); // This gives false.


// const bigNumber= 465466466465461212001n; // Here the 'n' at the end represents that this is a BigInt type.






// Reference (Non-Primitive) Data Types - Call by Reference (means whenever you assign a non-primitive value to a variable, it stores the reference/address of the value in memory)

// There are 3 types - Object, Array, Function


// const heros= ["shaktiman" , "naagraj" , "doga"]; // This is an Array type.

// const myObj={
    // name: "Utkarsh",
    // age: 20                  // This is an Object type. Here we store key-value pairs of data.
// }

// const myFunction = function(){
    // console.log("Hello World");  // This is a Function type.
// }



// Important

// console.log(typeof bigNumber); // This will give 'undefined' for bigInt data type.

// console.log(typeof myFunction); // This will give 'function' as the type of myFunction is Function.




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Types of Memory are- Stack anf Heap Memory

// 1) Stack Memory is used in Primitive Data types.
// 2) Heap Memory is used in Non-Primitive Data types.


// 3) In stack we give the copy of one variable's value to the another, so changes made in one variable does't result to cchange the value of another variable.

let myYoutubename = "CodeWithUtkarsh";
let anotherName = myYoutubename; // Here the value of myYoutubename is copied to anotherName variable.
anotherName = "Chai Aur Code"; // Here we changed the value of anotherName variable.
console.log(myYoutubename)
console.log(anotherName)
console.log(myYoutubename == anotherName) // This results in False.

// Here as you can see we changed the value of the variable anothername but it does not result in change in the value of variable myYoutubename because in Stack we provide the copy of the data to the variables.


//4) In Heap we provide the reference of the value of the one variable to the other variable and not the copy. So changes made in the value of one variable will reasult in making the change the original data.

let userOne={
    email:"uk@google.com",
    upi:"uk@upi"
}
let userTwo = userOne
userTwo.email = "UK@google.com"
console.log(userOne.email)
console.log(userTwo.email)
console.log(userOne == userTwo) // This results in True.

// Here we created a userOne object and given the values of email and upi, then we have given the values to the userTwo.
// So herein Heap memory we provide the reference of the values of one variable to the another.