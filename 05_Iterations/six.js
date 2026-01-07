const coding = ["js" , "ruby" , "python" , "cpp" , "java"]

coding.forEach( (item) =>{
    // console.log(item)  // This will give all the values inside the Array.
} )

// But can we store it in a Variable?

const values = coding.forEach( (item) =>{
    // console.log(item)
    return item
} )
// console.log(values)

// We can write like this way but remember "forEach" loop never returns any value, so here we get "undefined" as output.



// But we don't always want to return the values, maybe sometimes we want to perform some operations on it so in that case,

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (nums) => nums>4 )  // Fo that we use "filter", "forEach" loop doen't return values but "filter" return it. In "filter" also we use Callback function, and then a condition which when satisfied then we get the expected result.

// console.log(newNums)



const newNums1 = myNums.filter( (num) =>{
    return num>4
} )
// console.log(newNums1)

// If we write the arrow function using it's scope {} , then we have to write compulsory the "return".



// If we want to write this using "forEach" loop only then-

const newNums2 = []
myNums.forEach( (num) =>{
    if(num > 4){
        newNums2.push(num)
    }
} )
// console.log(newNums2)




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// Give me the Books having Genre as 'History'.

let userBooks = books.filter( (bk) => bk.genre === 'History' )
// console.log(userBooks)



// Give me the books that are published in or after 2000.

userBooks = books.filter( (bk1) => bk1.publish >= 2000)
// console.log(userBooks)



// Give me the books publishedi or after 1995 and genere ahould be 'History'.

userBooks = books.filter( (bk2) => bk2.publish >= 1995 && bk2.genre === 'History' )
console.log(userBooks)