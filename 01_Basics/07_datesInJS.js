let myDate = new Date() // Here we created the object / instance of the Date class.
// console.log(myDate); // This will give the result as  "2026-01-04T03:55:53.194Z"

// console.log(myDate.toString()); // This will give as  "Sun Jan 04 2026 09:28:11 GMT+0530 (India Standard Time)"

// console.log(myDate.toDateString()); // This gives  "Sun Jan 04 2026" 

// console.log(myDate.toLocaleString()); // This gives  "4/1/2026, 9:30:19 am"

// console.log(myDate.toLocaleDateString()) // This gives  "4/1/2026"


console.log(typeof myDate) // The data type of date is Object.


// If we want to create the custom date then-

let myCreatedDate = new Date(2024 , 0 , 23)
// console.log(myCreatedDate.toDateString());  // This gives  "Tue Jan 23 2024"

// Remember in the JS, if you give inputs in above then the months always starts from ZERO (0).

// Another method-

let myCreatedDate1= new Date(2024 , 0 , 23, 5 , 3 , 20)
// console.log(myCreatedDate1.toLocaleString());  // This will give  "23/1/2024, 5:03:20 am"


// Also can be given as-

let myCreatedDate2 = new Date("2023-01-14")  // In format YYYY-MM-DD
// console.log(myCreatedDate2.toLocaleString())  // This will give  "14/1/2023, 5:30:00 am"

// And in JS, if we write in above format then the months start from 01.


// But in India we use MM-DD-YYYY, so for that-

let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate3.toLocaleString())  // This will give as  "14/1/2023, 12:00:00 am"



// There are Timestamp in JS, which are used in making Quiz's ,Poll's, etc.

let myTimestamp = Date.now()  // This is another method instead of using the "new" keyword method.


// console.log(myTimestamp)  // This will give output as  "1767500725996" , this value is nothing but mili seconds of time from 01-01-1970 (It is the date from which we calculate the current time.)


// console.log(myCreatedDate3.getTime()) // This is used to get the time at the given date from 1st January 1970, so that we can compare it whenever it is required.


// In order to get the value in seconds-

// console.log(Math.floor(Date.now()/1000))  // 1 sec= 1000 milisec


let newDate = new Date()
// console.log(newDate.getDate()) // Gives the current Date.
// console.log(newDate.getMonth()) // Gives the current Month. As early said here months start from 0, so to remove the confusion simply add 1 at last like- console.log(newDate.getDate()+1)


// Now if want to get more customized date then-

newDate.toLocaleString('default' , {
    weekday: "long"
})