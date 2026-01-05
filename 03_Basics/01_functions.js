// We can define the functions as follows-

// function sayMyName(){
//     console.log("U");
//     console.log("T");
//     console.log("K");
//     console.log("A");
//     console.log("R");
//     console.log("S");
//     console.log("H");
// }

// sayMyName     // This is reference of the Function.
// sayMyName()   // This will execute as we have given parenthesis.



// Function to add two numbers-

function addTwoNumbers(number1 , number2){  // Here number1 & number2 are called as "Parameters"
    console.log(number1 + number2);
}

// addTwoNumbers() // This will not give any result because we have not given the values of the numbers.

// addTwoNumbers(3,4) // And here the values you pass are called as "Arguments".


// const result = addTwoNumbers(3,5) // If we write like this then remember the value of addition is shown in output due to console.log() and we are not returning in that function. Therefore here if we print the value of "result" then we get "undefined".


// Problems that can arise in this function

// addTwoNumbers(3,"4")  // This will convert the 3 in string and give result as 34
// addTwoNumbers(3,"a")  // Same as above, give result as 3a

// So here we are not checking the condition that the values are numbers, we will see it later onwwards.


function addTwoNumbers1(number1,number2){
    // let result = number1+number2
    // return result
    // console.log("Utkarsh"); // This line will never execute because after return nothing will execute.

    // Instead of the above we can simply write-
    return number1+number2
}
const Result = addTwoNumbers1(10,5)
// console.log("Result:" , Result)


function loginUserMessage(username){
    return `${username} just logged in.`
}
// loginUserMessage("Utkarsh")  // Here we don't get any output because we have only returned the valude but not printed it.
// console.log(loginUserMessage("Utkarsh")) // This will print the output.

// console.log(loginUserMessage()) // If someone don't pass anything in it then it will give "undefined" as ouptut.


// We can also add if condition in it to check the value-

// function loginUserMessage1(username){
//     // if(username === undefined){
//     //     console.log("Please enter a username!");
//     //     return
//     // }

//     // We can also use below way-

//     if(!username){
//         console.log("Please enter a username!");
//         return
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage1());



function loginUserMessage2(username ="sam"){  // Here we can give the default values so that if we don't give any value then it will take the default value.
    if(!username){
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage2());



// Suppose we are making a e-commerce website, then there is always option of Add to Cart, so now we have to calculate the total price of all the added items, but the problem is we don't know the number of objects so,

function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(200)) // This is ok because we have one valie, but if we have more values then what?
// console.log(calculateCartPrice(200,100,400)); // This will not work.


// So for this we have Rest operator.
// Note that here ... means Rest operator, as we know it is also called as Spread Opertor but where we use these three dots that decides the type of operator and it's function. 
function calculateCartPrice1(...num1){
    return num1
}
// console.log(calculateCartPrice1(200,400,100)) // This will return the Array of all the values.


// If we want to use Object inside the Function then -

const user={
    name:"Utkarsh",
    location:"Pune"
    // locations:"Pune"
}

function handleObject(anyUser){
    console.log(`Username is ${anyUser.name} and location is ${anyUser.location}`);
}
handleObject(user)

// We can also pass the objects directly as follows instead of using the seperate oblects.

// handleObject({
//     name: "UK",
//     location:"pune"
// })


// This is ok, but problem is when we change the "location" to "locations" then it will not print the value. Ten it will give undefined as value.



// If we want to use Array inside the Function then -

const myArray = [200,100,500,400]

function myNewArray(array){
    return array[0]             // Here we are returning the first value inside the array.
}

console.log(myNewArray(myArray))
// console.log(myNewArray([200,100,500,400])); // In this way we can directly pass the Array while calling the Function.
