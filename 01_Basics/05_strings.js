const name= "Utkarsh"
const repoCount= 50

// console.log(name + repoCount + "Value") // Don't use this because this is not outdated and this is not good practice.\

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) // Instead you can use the Back Ticks. This is known as String Interpolation. Means here we create placeholders and inside it we give the variable directly.


// We can also declare the string as

const gameName= new String("Chess") // This results in creating the object of the String. Means here it will create the key-value pairs.
// So we can access the key-value pairs as-
console.log(gameName[0]) // Here we have accessed the 0th key-value pair.

console.log(gameName.length) // Here we get the length. So like this we can get access of all the other methods/functions which you can see on web page, just right click and inspect and then go on console and type the above all.
// For example

console.log(gameName.toUpperCase()) // This will convert the string to upper case. But remember this will not change the original string. It will return a new string, because it is used in Primitive data type and there we give the copy of the original data.

// If we want to find particular character at given index then-

console.log(gameName.charAt(2)) // This will give the character at index 2.

// If we want to find the index of given character then-

console.log(gameName.indexOf('s'))



let gameName1= "Che-ss"
const newString =  gameName1.substring(0,4)
console.log(newString) // This will give the string from index 0 to index 4 but excluding index 4.


const anotherString = gameName1.slice(-5,3) // Here in slice we can also use negative indexing. So here -5 means it will start from last but 5th index.
console.log(anotherString)



const newGame1= "    Football     "
console.log(newGame1)
console.log(newGame1.trim()) // This will remove the whitespaces from starting and ending of the string.



let url= "https://utkarsh.com/utkarsh%20website"
console.log(url.replace('%20' , '-'))  // Here it will replace the %20 by dash (-) using replace function.
console.log(url.includes('website'))  // This will give true if it has the website in the url



let name1= "Cricket-Tennis-Racing"
console.log(name1.split('-')) // Due to use of the split we can convert it into Array. Here we have used dash (-) as separator. So it will split the string at every dash and convert it into array.