"use strict"; // This treats all JS code as newer Version

// alert(3+3) // We are using JS not browser so this will give Error.

let name="Utkarsh"
let age=18
let isLoggesIn=false

// Data Types

// 1) Number => range of 2 to the power 52/53.
// 2) bigint => for very large numbers.
// 3) String => sequence of characters, can be represented by single or double quotes.
// 4) Boolean => true or false.
// 5) null => standalone value that represents "nothing".
// 6) undefined => for variables that are not assigned any value.
// 7) Symbol => used to create unique identifiers for objects.
// 8) Object => used to store collections of data and more complex entities.

console.log(typeof "Utkarsh") // Here typeof is used to identify the value of variable. Here it is String
console.log(typeof age) // Here it is Number
console.log(typeof null) // This is very important because the typeof Null is "Object" which is a Bug in JS.
console.log(typeof undefined) // Here it is undefined