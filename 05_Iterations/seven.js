const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (num) => num+10 ) // Here "map" automatically returns the values. It is same like "forEach" i.e. perform operation on all the values but "forEach" doesn't return anything and "map" return the values.

// console.log(newNums)



// Chaining

// Chaining means nothing but using multiple methods at a time.

const newNums1 = myNumbers.map( (num1) => num1*10 ).map( (num1) => num1+1 )
// console.log(newNums1)

// Here we have used two map functions. Firstly we are multiplying by 10.
// So for the next map function, the values are modified i.e. here for 2nd map we have values myltiplyied by first map function.
// Therefore remember when we use chaining the input value of a map method is always value of it's previous method.
// Because it is correct that after first map function we are not printing the result but we have created a new array of values after 2st map function, so the new array of values is used by next method and not the Original Values.

const newNums2 = myNumbers.map( (num2) => num2*10 ).map( (num2) => num2+1 ).filter( (num2) => num2>=40 )
console.log(newNums2)