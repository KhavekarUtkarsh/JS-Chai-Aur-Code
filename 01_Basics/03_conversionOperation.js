// let score= 33

// console.log(typeof score)
// console.log(typeof (score)) // Here both are same. Both gives output as number.



// let score1= "33"

// console.log(typeof score1) // Here it will give the string as output

// If we want to convert the String value into number value then we can write it as-

// let valueInNumber= Number(score1)
// console.log(typeof valueInNumber)



// let score2="33abc"
// let valueInNumber1= Number(score2)

// console.log(typeof valueInNumber1) // This will also give output as number in JS though it is not a number.
// console.log(valueInNumber1) // Output will be NaN (Not a Number)



// let score3= null
// let valueInNumber2= Number(score3)
// console.log(valueInNumber2) // This will give output as 0



// let score4= undefined
// let valueInNumber3= Number(score4)
// console.log(valueInNumber3) // This will give output as NaN



// let score5= true
// let valueInNumber4= Number(score5)
// console.log(valueInNumber4) // This will give output as 1



// let score6= "Utkarsh"

// let isNnNumber5= Number(score6)
// console.log(isNnNumber5) // This will give output as NaN because "Utkarsh" is not a number.



// let isLoggedIn=1
// let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // This will give output as true because 1 is considered as true in boolean conversion.



// let isLoggedIn1= ""
// let booleanLoggedIn1=Boolean(isLoggedIn1)
// console.log(booleanLoggedIn1) // This will give output as false because empty string is considered as false in boolean conversion.



// let isLoggedIn2= "Utkarsh"
// let booleanLoggedIn2= Boolean(isLoggedIn2)
// console.log(booleanLoggedIn2) // This will give output as true because non-empty string is considered as true in boolean conversion.



// let number=23
// let stringNumber= String(number)
// console.log(stringNumber) // This will give output as "23" because we have converted number into string.
// console.log(typeof stringNumber) // This will give output as string because we have converted number into string.



// ----------------- Operations -------------------

// let value=3
// let negValue= -value
// console.log(negValue)


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)



// let str1= "Hello"
// let str2= " Utkarsh"
// let str3=str1+str2
// console.log(str3)



// ****** Problems ********

// console.log("1"+2) // Here JS converts number 2 into string "2" and then concatenates both strings.
// console.log(1+"2") // Here JS converts number 1 into string "1" and then concatenates both strings.
// console.log("1"+"2") // Here both are strings, so they are concatenated.
// console.log("1"+2+2) // Here firstly it converts number 2 into string "2" and then concatenates both strings and then again concatenates with another "2".
// console.log(1+2+"2") // Here it firstly adds the numbers 1 & 2 then concatenate with the "2"



// console.log(true); // This will give output as true
// console.log(+true); // This will give output as 1 because here we are incrementing the value of boolean so it is 1.
// console.log(+""); // Here we know that the value of the "" is 0 so by incrementing it still give output as 0.


// Mistakes you should avoid while writing the code

// let num1, num2, num3
// num1 = num2 = num3= 2+2 // We should avoid to write codes like this.


// let gameCounter= 100
// gameCounter++
// ++gameCounter               // Here both ways gives same output as 101.
// console.log(gameCounter)


// For better understanding of the Prefix and Postfix increment visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

