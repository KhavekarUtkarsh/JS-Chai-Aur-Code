const accountId= 12345 // Here if value is given then we can't change it.
var accountPassword= "78945"  // We avoid using var because it can lead to change the values of the variable declared with var to change without considering it's scope.
let accountEmail= "uk@gmail.com" // So we are going to use the let so that it can't change the value of particular variable inside the particular scope.
accountCity= "Pune" // Also in JS we can declare variables like this but try to avoid this.

// accountId= 67890  // This will throw error as we can't change the value of constant variable.

accountEmail="ukuk@gmail.com"
accountPassword= "121212"
accountCity= "Mumbai"

/*
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
*/

let accountState; // We can declare variable without assigning any value. This will give the undefined as output.

// Instead of using these seperate console statements we can use following method-

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])