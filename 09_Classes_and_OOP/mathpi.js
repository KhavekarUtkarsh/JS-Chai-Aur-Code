// console.log(Math.PI)

// Here we get the PI value. But if you try to change it then you can't.



const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descriptor)

// This property tells some hidden things about the Object that might you have not seen.


const chai ={
    name : "Ginger Chai",
    price : 250,
    isAvailable : true
}

// console.log(chai)



// console.log(Object.getOwnPropertyDescriptor(chai)) // The output will be "undefined". Because we are asking to give the descriptor of a Property but here "chai" is not a Property.

// console.log(Object.getOwnPropertyDescriptor(chai , "name"))


// In JS we can define properties in Object.

Object.defineProperty(chai , 'name' , {
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"))