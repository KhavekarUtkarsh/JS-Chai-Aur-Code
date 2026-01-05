const user = {
    name : "Utkarsh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.name} , Welcome to Website!`);  // Here to refer or access the value of Current Context we have to use "this".
        // console.log(this); // Here it will give the current values ind=side this, firstly it has name Utkarsh and for the next print statement it has Sam as name and rest is same.
        
    }
}
// user.welcomeMessage() // This gives Utkarsh , Welcome to Website!

// user.name = "Sam"
// user.welcomeMessage() // This give Sam , Welcome to Website! , because here we have changed the value of the name in user.

// console.log(this); // This will give empty {} because here in Node environment there is no context available for the Global scope.

// But if we write the same line in the Web by Inspecting it then we will get the Context of "Window" / Global Object is Window Object.




// function chai(){
//     console.log(this)
// }
// chai() // This will give numerous methods that are present using "this".

// function chai(){
//     const userName= "UK"
//     console.log(this.userName) // This gives output as "undefined" , because the Concept of Context only works for Objects and not on Functions.
// }
// chai()


// If we make function by below method then the result is still same.

// const chai = function(){
//     const userName ="UK"
//     console.log(this.userName);
// }
// chai()


// If we use Arrow Function, still result is same "undefined"

// const chai = ()=> {
//     const userName ="UK"
//     console.log(this.userName);
//     console.log(this) // This gives an empty parenthesis {}.
// }
// chai()



// Arrow function for adding two numbers-

// const addTwo = (num1,num2) => {    // This is called as Explicit Return Method.
//     return num1+num2
// }
// console.log(addTwo(3,4));


// We can write arrow functions in another way also called as Implicit Return.

// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(3,4));


// Also we can write as- 

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(3,4));


// Remember

// In Arrow function if we use Curly Braces {}, then we have to write the "return" keyword.
// But if we use Parenthesis (), then we don't require to write "return" keyword.
// This Parenthesis will be used very Commonly in React, so keep it in MIND.



// If we want to return Object using Arrow Function then-

// const addTwo = (num1,num2) =>{name:"UK"} // In this way we can't return the Object this will give undefined.
// console.log(addTwo(3,4));

const addTwo = (num1,num2) =>({name:"UK"}) // By use of the Parenthesis we can return the Object.
console.log(addTwo(3,4));