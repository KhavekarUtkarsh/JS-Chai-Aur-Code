// There are differnet ways to define Objects.

// Singleton

// Object.create  // This is known as Constructor Method.


// Object Literals

const mySym = Symbol("key1") // If we want to use Symbol data type inside object then we have to write it as below or it will act like String and not Symbol.

const jsUser = {
    name : "Utkarsh",
    // mySym: "myKey1",  // This will act like String and not Symbol
    [mySym] : "myKey1",
    age : 20,
    location : "Pune",
    email : "uk@gmail.com",
    isLoggedIn : false,
    lastLoggeddays : ["Monday", "Saturday"]
}

// console.log(jsUser.email) //In this way we can Access the values inside the object. But ther is another way to do so.

// console.log(jsUser[email]); // This will through error because inside the object the keys are stored in the String format.

// console.log(jsUser["email"]); // This is also the correct way.

// console.log(jsUser[mySym]); // Only in this way we can access it.

jsUser.email = "uk@chat.com" // In this way we can change the values.
// console.log(jsUser.email)


// If we want that the values should not get changed then we can Freeze it as-

// Object.freeze(jsUser) // This prevents any further changes in jsUser object. If we try to change the vakues after the freeze then it will not through error and also will not change the value.

// jsUser.email = "uk@chatgpt.com" // This will not work.
// console.log(jsUser)



jsUser.greeting = function(){
    console.log("Hello JS Users!");
    
}

// console.log(jsUser.greeting); // This gives [Function (anonymous)] as output. This means function is not executed and we have got onlt its reference.

jsUser.greeting1 = function(){
    console.log(`Hello JS User ${this.name}`); // Whenever you need to refer to the same object you have to use "this" 
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting1());