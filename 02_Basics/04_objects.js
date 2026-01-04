// const tinderUser = new Object()          // This is Singleton Object.

const tinderUser = {}                      // This is Non Singleton Object.

// console.log(tinderUser);                   // Both give empty object {}

tinderUser.id = "123abc"
tinderUser.name = "Tammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// We can give Objects inside the Objects.

const regularUser = {
    email : "some@gmail.com",
    fullName :{
        userName: {
            firstName : "utkarsh",
            lastName : "khavekar"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName); // We can access the values like this way.


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2) // This is the way we have to combine two objects into one. Here the Parenthesis "{}" is not Compulsory to give but it is a Good Practice if we write it every time. But is will not be used frequently.

const obj3 = {...obj1, ...obj2} // This way we are going to use every single time.
// console.log(obj3);


// When data comes from databases then most of the time it is in Array of Objects form as-

const users =[
    {
        id : 1,
        email : "user1@gmail.com"
    },
    {
        id : 2,
        email : "user2@gmail.com"
    },
    {
        id : 3,
        email : "user3@gmail.com"
    }
]

// users[1].email   // If we want to access the email of the first user.


console.log(Object.keys(tinderUser)); // This returns the Keys of the tinderUser Object. Note that here it returns the Array as the data type.
console.log(Object.values(tinderUser)); // This also returns an Array of values of tinderUser.

console.log(Object.entries(tinderUser)); // This converts each and every key-value pairs inside the tinderUser into seperate Array's and again all these are inside Array.

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // To check if there any proprty inside the Object as given name.
