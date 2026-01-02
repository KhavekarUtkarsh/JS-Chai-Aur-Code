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



let number=23
let stringNumber= String(number)
console.log(stringNumber) // This will give output as "23" because we have converted number into string.
console.log(typeof stringNumber) // This will give output as string because we have converted number into string.