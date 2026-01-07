const myObj = {
    js : "Javascript",
    cpp : "C++",
    swift : "Swift by Apple",
    rb : "Ruby"
}

for (const key in myObj) {
    // console.log(key)  // Here this will give only keys inside the object.
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`)  // In this way we can get the key-value pairs of Object.
}



// Iterating Array using "for in" loop

const myArray = ["js" , "rb" , "cpp" , "swift"]

for (const key in myArray) {
    // console.log(`${myArray[key]} is a Programming language.`) // Using this we can iterate an Array.
}

// Here if we print only "key" then it will give numbers as 0,1,2,3 because "Array also has keys" which are Numbers starting from 0.



// Using "for in" loop on Map

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")
map.set("IN" , "India")

for (const key in map) {
    console.log(map)  // This will not give any output because Map is not iteratable so we can't use the "for in" loop here.
}