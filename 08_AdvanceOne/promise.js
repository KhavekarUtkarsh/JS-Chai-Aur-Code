// A promise is an object representing the eventual completion(or failure) of an Asynchronous operation and it's resulting value.

const promiseOne = new Promise(function (resolve, reject) {
    // Do async task
    // DB calls , cryptography , network

    setTimeout(function () {
        // console.log("Async Task is Complete!")
        resolve()  // This is very crucial because by writing this only we can connect the "Resolve" to ".then". If wefail to write this then the Promise will not get consumed.
    }, 1000)
})

promiseOne.then(function () {
    // console.log("Promise Consumed!!")
})

// Here ".then" has direct connection to the "resolve".
// Here ".then" has a function which consists a parameter taken from the result of the Promise given above it.


// We can create a Promise like this-

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task 2!")
        resolve()
    }, 1000)
}).then(function () {
    // console.log("Async 2 resolved!!")
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "UK", email: "uk@example.com" })  // Here we can pass the data in the resolve, which is mostly an "Object."
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user)  // We can access the parameters given in the "resolve" method like this.
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Utkarsh", password: "123" })
        }
        else {
            reject('ERROR : Something Went Wrong!!')
        }
    }, 1000)
})

promiseFour.then((user) => {
    // console.log(user)
    return user.username
}).then((username) => {
    // console.log(username)
}).catch((err) => {
    // console.log(err)
}).finally(() => console.log("The Promise is Resolved or Rejected."))

// Here suppose we have error. Then we are usinf "if-else" to check if there is error or not.
// If not then we simply resolve, if yes then we can print error message.
// If resolve then we take it by ".then" and if found error the we can use ".catch" to catch the error.
// We can use multiple ".then" and multiple ".catch" methods. This is called as Chaining.
// Here in first ".then" we are returning the "user.username" means username from the data given by "resolve".
// But the returned value / data goes where? So tje answer is in the next ".then".
// And at very last we have the ".finally" which will always execute at the end.


// It is not necessary to use ".then , .catch" method, we have another way called as "Async-await" methos.
// The concept is same but here it waits for a particular time - if the work is done or it will throw error.

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        }
        else {
            reject('ERROR : JS Went Wrong!!')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    }
    catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// Here "async-await" directly can't handle errors. So we have to write in the "try-catch" format



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // Here fetch will return a Promise.

//         // const data = response.json() // Here we are converting String data into JSON data. This will throw error because the "response.json()" also takes time to execute. So we have to give await for it also.

//         const data = await response.json()

//         console.log(data)

//     } catch (error) {
//         console.log("E:" , error)
//     }
// }

// getAllUsers()



// Now we will try to write it in " .then & .catch" format.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))