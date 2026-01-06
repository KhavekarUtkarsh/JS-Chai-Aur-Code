// for loop

// Syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element)
}


for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the Best Number!") // Here as the value of the element matches 5 then firstly this print statement executes and then the next print statement executes.
    }
    // console.log(element)
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner Loop value : ${j} and Outer Loop value : ${i}`)
    }
}


for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 5; j++) {
        // console.log(i + " * " + j + " = " + (i*j) )
    }
}


let myArray = ["flash", "batman" , "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// break and continue

for(index = 1; index<= 20; index++){
    if (index == 5) {
        // console.log("Detected 5")
        break                           // "break" is used to break the Control Flow.
    }
    // console.log(`Value of i is : ${index}`)
}



for(index = 1; index<= 20; index++){
    if (index == 5) {
        // console.log("Detected 5")
        continue                           // "continue" is used to skip for a particular condition.
    }
    // console.log(`Value of i is : ${index}`)
}