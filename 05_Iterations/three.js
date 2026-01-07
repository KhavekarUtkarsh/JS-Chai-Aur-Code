// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello-World!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`)
}


// ***************************************************************************************************************************

// Map

// Map is a type of Object which holds key-value pairs.
// It also remembers the order in which the values are inserted.
// It is also known for Unique values means here values will not get repeated.

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")
map.set("IN" , "India") // If we add this then there will not add extra entry of this line because we have firstly inserted it into map.

// console.log(map)


// adding loop on Map

for (const key of map) {
    // console.log(key) // This will give all the key-value pairs available inside the map in Array format.
}

// If we want to print it seperately then- 

for (const [key,value] of map) {     // Here "[key,value]" is called as Destructuring of Array.
    // console.log(key + ':-' + value) // Now using this we can get all the key-value pairs seperately.
}




// Iterating Objects using "for of"

const myObj = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}

for (const [key,value] of myObj) {
    console.log(key + ':-' + value)  // Here it will throw error because Objects can't be iterated using "for of" loop.
}