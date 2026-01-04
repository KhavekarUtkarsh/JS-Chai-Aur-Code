const marvelHeros = ["thor" , "ironman" , "spiderman"]
const dcHeros = ["superman" , "flash" , "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);  // This results in Array inside Array  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// Also remember that after push operation we don't get new Array. The push method pushes on the Existing Array.

// So here if want to access the falsh then
// console.log(marvelHeros[3][1]);  // But this is not good practice.


// So to avoid this we can use concat method-

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros) // This gives the required output [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Unlike the push here concat gives new array after it's operation.



// There is another method for the same operation i.e. Spread. Consider example of Glass Bottle, if you drop it then it will Spread like that.

const allNewHeros = [...marvelHeros, ...dcHeros] // As we write here ... this means it is not anymore an Array, the elements became individual.
// console.log(allNewHeros);



const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableArray = anotherArray.flat(Infinity)
// console.log(usableArray);
// If we have arrays inside arrays then we can use flat method, here we have to give depth like 1, 2 but we can give here Infinity so that any number arrays will get converted in single Array.



// Many times while getting data from web pages or another, the data may be in string, node list, objects, etc. , then we can convert it in Array as-

// console.log(Array.isArray("utkarsh")) // Here we are asking that it is Array or not
// console.log(Array.from("utkarsh")) // Here we can convert it in Array using "Array.from"



// console.log(Array.from({name : "Utkarsh"})) // This will give empty Array because in this case we have to tell it like make array of keys or values like that.



let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1 , score2 , score3)); // For this condition we can use "Array.of" Returns a new array from a set of elements. Here it makes a New Array.
