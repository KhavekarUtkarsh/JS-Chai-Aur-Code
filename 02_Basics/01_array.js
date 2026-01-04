// There are different ways to declare the Array as follows-

const myArr1= [0,1,2,3,4,5]
const myHeros= ["shaktiman","naagraj"]

const myArr2= new Array(0,2,4,6,8)

// console.log(myArr1[1]) // In this way we can access the elements in the Array.




// Array Methods



// myArr1.push(6)  // Here push method is used to push elements in the Array.
// console.log(myArr1)


// myArr1.pop()  // Here pop method is used to remove the last element from the Array.
// console.log(myArr1)


// myArr1.unshift(9) // Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(myArr1)

// myArr1.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr1)


// console.log(myArr1.includes(9)) // Determines whether an array includes a certain element, returning true or false as appropriate.

// console.log(myArr1.indexOf(9)) // Returns the index of the first occurrence of a given value in an array, or -1 if it is not present.
// console.log(myArr1.indexOf(3));


const newArray = myArr1.join() // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr1)
// console.log(newArray)
// console.log(typeof newArray) // Here after join opration we get the String not Array.



// Slice and Splice

console.log("A " , myArr1);

const myn1 = myArr1.slice(1,3) // Slice is used to return a copy of an Array, here it gives values of 1,2 index and doesn't include 3.

console.log(myn1);

console.log("B " , myArr1);

const myn2 = myArr1.splice(1,3)  // Splice is same as Slice but it includes last index (3 here) , but importantly it doesn't give copy of Array instead it modifies the Original Array. Means here after Splice operation the Array will be [0,4,5]

console.log(myn2);

console.log("C " , myArr1);