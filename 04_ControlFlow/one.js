// Control Flow is nothing but the Condtions that suppose user is logged then some part of code should run, if user logout then some part of code should run like that. Never ever whole code should run.


// if

// The syntax of "if" is as follows. Here if the condition given in "if" is "true" then only we can enter in "if" block.

// if(true){

// }

// We have various operators for checking the Conditions like- < , > , <= , >= , == , === , != , !==

// Example

const temperature = 41
if(temperature<50){
    // console.log("Less than 50");
}
// console.log("Greater than 50");

// Here firstly condition is matched so it will be printed but the 2nd print statement doesn't belong to if block so it will also get printed. So solve this problem we have "if-else".


// if-else

const temperature1= 41
if(temperature1 <50){
    // console.log("Less then 50")
}
else{
    // console.log("Gretate than 50") // Now if the above condition will not get satisfied then only this print statement will print the value.
}
// console.log("This will also Execute!")


const score = 200
if (score > 100) {
    const power = "fly"
    // console.log(`User power: ${power}`) // This can access the value of power because it in the same block scope.
}
// console.log(`User power : ${power}`) // But this will not access the value of power because the Scope of "power" is limited for if block. This will through error as power is not defined.



// There is short hand for the same "if" block.

const balance = 1000
// if(balance > 500) console.log("test1") , console.log("test2");

// In this way we can write the if statement also we can erite multiple line by giving "Commas" between them and finally at last we have to give "Semi-colon".
// But this is not good practice to write if block so try to avoid it.



// if-else ladder

const balance1=1000

if (balance1<500) {
    // console.log("Less than 500")
}else if (balance1<700) {
    // console.log("Less than 700")
}else if (balance1<1000) {
    // console.log("Less than 1000")
}else{
    // console.log("Less than 1200")
}


// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard){
//     // console.log("Allowed to buy Course!")
// }

// Here we have used "&& (and condition)" for checking both the conditions and then we are allowed to enter in the "if" statement. And if any one condition becomes false then we are not going inside the "if".


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy Course!")
}

if(loggedInFromGoogle || loggedInFromGmail){
    console.log("Allowed to Enter!")
}

// Here we have used "|| (or condition)" for checking that at least one condition is true, if yes then we can print otherwise not.

// Here "and" , "or" operators are called as Logical Operators.