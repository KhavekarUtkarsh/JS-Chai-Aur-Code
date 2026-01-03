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