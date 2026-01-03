const score= 100
// console.log(score) // Here JS automatically detects that the given data type is Number and prints only 100.

// Another way to declare a number

const balance= new Number(100)
// console.log(balance) // Here we are explicitly telling JS that the data type is Number and prints [Number: 100].

// If we use the second method in the web browser then we can access the different functions that can be performed on the same.

// console.log(balance.toString())
// console.log(typeof balance) // Here we are converting the number 100 into String , but as we created it by making use of object it still shows as object.


// console.log(score.toString())
// console.log(typeof score) // Here we are converting it into the String but here it is making a temorary variable of String type and the original variable score remains same as Number type.



const score2 = 1000
const strScore = score2.toString()
// console.log(strScore)
// console.log(typeof strScore) // Now using this method we can get the string data type after using toString method as here we assigned it to a new variable.


// To find the length of the String we have

// console.log(strScore.length) // Here it shows 4 as the length of the string 1000 is 4.


// To use decimal points after the number we use-

// console.log(score2.toFixed(1)) // Here it shows 1000.0 as we have used toFixed method to show one decimal point after the number.


const number1= 23.8966
// console.log(number1.toPrecision(3)) // Here it shows 23.9 as we have used toPrecision method to show only 3 significant digits. Means here toPrecision method gives the precise value of number provided in the toPrecision method and using the number given in method i.e. here 3.


const number2= 123.8966
// console.log(number2.toPrecision(3)) // Here it gives value as 124 because here it takes first three digits and rounds-off the remaining.

const number3= 1123.8966
// console.log(number3.toPrecision(3)) // Here it gives value as 1.12e+3 because here it takes first three digits and converts the remaining into exponential form.

// Remember the toPrecision return value in the form of String.



const hundreds= 1000000
// console.log(hundreds.toLocaleString()) // Here it shows 1,000,000 as we have used toLocaleString method to show the number in a more readable format. But here it is in the the US format.

const indianHundreds= 1000000
// console.log(indianHundreds.toLocaleString('en-IN')) // Here it shows 10,00,000 as we have used toLocaleString method with 'en-IN' to show the number in Indian format.


// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math) // This tells us that the Math is an Object having different functions.


// console.log(Math.abs(-4)) // This converts the negative values into positive.


// console.log(Math.round(4.3)) // This converts the given decimal number by rounding off and it follows the tradional rule means if number is 4.2 then give 4 and if 4.6 then 5.

// // In order to control that when to have particular number irrespective the traditional rules then use these-

// console.log(Math.ceil(4.2)) // This gives the next number if there is any value after the decimal point i.e. here output will be 5

// console.log(Math.floor(4.9)) // This gives the previos number if there is any value after the decimal point i.e. here output will be 4


// console.log(Math.min(3,5,6,1,7)) // Here it gives the minimum value from the array.


// console.log(Math.max(3,5,6,1,7)) // Here it gives the maximum valu from the array.



// console.log(Math.random()) // This function is used to generate the random values. Also the values are in between 0 &1.

// console.log((Math.random()*10)+1) // Here multiplying it by 10 shiftss the decimal point bt 1 digit but still we can get the zero point something value so for that we add 1.

// console.log(Math.floor(Math.random()*10)+1) // Here we used floor to get the lowest round-off value.


// But in order to get the values in between particular range them use the following-

let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min)