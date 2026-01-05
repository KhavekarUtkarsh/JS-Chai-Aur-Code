// IIFE = Immediately Invoked Function Expression

// It is mainly used for two reasons-
// 1) To immediately execute functions.
// 2) Sometimes we face problem due to Global Scope Pollution so in order to remove the pollution due to variables or any declaration in Global Scope we use IIFE.



// function chai(){
//     console.log(`DB connected!`);
// }
// chai()       // This is the Standared way to execute the functions.


// So for this we can write IIFE-

// (function chai(){
//     console.log(`DB connected!`);
// })()

// In this way we can also execute immediately. Here first parenthesis is for Definition of Function and second Parenthesis is for Function Excuetion. "()()"


(function chai(){              // This is called as Named IIFE.
    console.log(`DB connected!`);
})();


// (function aurCode(){
//     console.log(`DB connected Again!`);
// })()

// This will not execute though the syntax is same because after first function writing like that we have to give the semicolon at the end of first/ above function, then this second function will work.


// We can write the same type of IIFE using Arrow Function.

// (() =>{
//     console.log(`DB connected Finally!`);
// })()

((name) =>{                          // This is Simple/ Un-named IIFE.
    console.log(`DB connected Finally! ${name}`);
})("UK")

// We can also pass and access the values using IIFE.