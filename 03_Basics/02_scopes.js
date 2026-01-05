var c = 300

if(true){
    let a= 10
    const b= 20
    var c= 30
}

// console.log(a); // This will through error, because it is declared inside block of if it will not be accessed anywhere else.
// console.log(b); // This also through error, because it is declared inside block of if it will not be accessed anywhere else.
// console.log(c); // This will not through error because there is no condition of Scope followed by the var

// But the problem with var is here as you can see we firstly declared c as 300 but inside the if we declared it as 30 so when we print the value of c we get 30 and not 300, which is a problem.
// That's why we avoid to use var.

// The code inside the if is called present in "Block Scope" and all the remaining part of code is called as present in "Global Scope".

// Values present in the Global Scope can be accessed inside the blocks like "if" but the values present inside the Block Scope are nit accesible outside it.

let A= 300

if(true){
    let A=200
    const B=100
    // console.log("Inner:" , A); // This will give output as 200.
    
}
// console.log("outer:" , A); // This will give output as 300 as we have value of A available as 300, remember the value of Both A's are different from each other.


// ++++++++++++++++++++++++++++++++++++++++++++++++ Important ++++++++++++++++++++++++++++++++++++++++++

// Remember the Global Scope that we use using node here is different from the Global Scope that we see in the Web by inspecting it using Right Click. We will see it later onwards.





function one(){
    const userName = "Utkarsh"

    function two(){
        const website = "Youtube"
        // console.log(userName);
    }
    // console.log(website);  // If we write this then code will throw error and the next function call of function also not get executed because code is executed line by line and will not go further afet this.
    two()   
}
// one()

// Here we are trying to understand how the scopes work for multiple functions.
// For that consider example of Ice-cream, children can take Ice-creams by arguing with Elders, but Elders can't take Ice-creams of the children by arguing.
// Means here we can access the value of the "userName" inside the "two" function as it's Global Scope is of "one" function.
// But we can't access the value of website because it's scope is of only inside the "two" function and outside it.




// Same thing we can check inside "if" blocks-

if(true){
    const username = "UK"
    if(username === "UK"){
        const website1= " YT"
        // console.log(username+website1);
    }
    // console.log(website); // Same explained above.
}
// console.log(username);  // Same as explained above.



// +++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++


addOne(5)

function addOne(num){
    return num+1
}
// addOne(5)

// Above way is the simple way to decalre the Function. Here if we call the function before actual function then this will not throw error.



// This is the another way of declaring the Functions. Here we are not only declarinf function but also holding them in a Variable. Do if we call the function before its function then it will throw error.

addTwo(5)

const addTwo = function(num1){
    return num1+2
}
// addTwo(5)
