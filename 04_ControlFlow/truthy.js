const email = "u@utkarsh.ai"

if(email){
    // console.log("Got user email")
}else{
    // console.log("Don't have user email")
}

// Here obviously first condition statement will get executed.
// But the point is here we haven't checked any condition, only here we have given "email" as in condition and it is executed.
// This means it is considering that the value is true and printing the result.
// This is nothing but the Truthy value.


const email1 = ""

if(email1){
    // console.log("Got user email")
}else{
    // console.log("Don't have user email")
}

// As here we have given an empty string it will consider as false and run else part.
// This is nothing but Falsy value.


const email2 = []

if(email2){
    // console.log("Got user email")
}else{
    // console.log("Don't have user email")
}

// Now here we have given the array as input but still it will consider it as true and we will get the "Got User Email" as output.


// The list of Truthy and Falsy values are as follows-

// Falsy Values => false , 0 , -0 , BigInt ( 0n ) , "" , null , undefined , NaN

// Truthy Values => "0" , 'false' , " " , [] , {} , function(){}


// Remember single or double quotes both are used to represent the String.


// To check the Array is empty or not-

const arr1 = []
if(arr1.length === 0){
    // console.log("Array is Empty")
}


// TO check the Object is empty or not-

const obj1 = {}
if(Object.keys(obj1).length === 0){
    // console.log("Object is Empty")
}

// Here "Object.keys(obj1)" return an Array so then as same as array we can use ".lenth === 0" condition and we can get the answer.



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Nullish Coalescing Operator (??) : Here we are dealing with only "null" and "undefined" 


// This is used if in case you get suppose two values from database means one is "null" and another any value the in that case we use this operator.


let val1;
// val1= 5 ?? 10          // Here we get 5 as output because 5 is at very first.

// val1= null ?? 10       // Here we get 10 as output because if we have got null the this operator smartly gives another value(here we are taking it as value but actually we will write complex codeto get data from database.)

// val1 = undefined ?? 15 // Here we get 15 as output as explained above.

val1 = null ?? 10 ?? 20   // Here whichever the first value it will get , it returns that value.

// console.log(val1)


// ********************************************************************************************************************************

// Terniary Operator

// Syntax => condition ? true : false

const iceTeaPrice = 90

iceTeaPrice === 80 ? console.log("Equal to 80") : console.log("Not equal to 80")
