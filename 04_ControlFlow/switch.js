// The syntax of "switch" is as follows.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("Enter valid number!")
        break;
}

// If here we are not written the "break" then after matching the value with the third case i.e. "march", then it will start executing all the next lines without checking except "default".
// So "break" is important to break the Control Flow.

