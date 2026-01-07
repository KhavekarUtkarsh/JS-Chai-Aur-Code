// for each loop

const coding = ["js" , "ruby" , "python" , "cpp" , "java"]

coding.forEach( function (item){
    // console.log(item)
} )

// forEach calls the callbackfn function one time for each element in the array.

// As here the function that we re providing inside the forEach is Callback Function, we don't require to give the name of the Function (ex., function greet() {})

// Also here the function is working inside the Array so here the "item" act as parameter and it will go and take each value of Array.


// Here we can also use Arrow Function as Callback Function -

coding.forEach( (item) => {
    // console.log(item)
} )



// Here we can pass the function in the "forEach".

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe) // Remember here we have to only refer to the Function "(printMe)" and don't try to execute the function "(printMe()"



// There are other parameters present in "forEach"-

coding.forEach( (item, index , arr) =>{
    // console.log(item , index , arr)   // Here items will give the values of Array, index gives their index and arr gives the whole array.
} )



const myCoding = [
    {
        langName : "javascript",
        langFileName : "js"
    },
    {
        langName : "python",
        langFileName : "py"
    },
    {
        langName : "java",
        langFileName : "java"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.langName)
} )