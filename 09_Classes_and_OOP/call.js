function setUserName(username){
    // Comlpex DB calls
    this.username = username
    console.log("called!!")
}

function createUser(username , email , password){
    // setUserName(username)
    // setUserName.call(username)

    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai)

// Here we get only email and password, but we will not get name in hte output.
// Because we have made another function inside the 2nd function it should work but it is not.
// So the problem is we have given only the reference of the first function in 2nd even though it is "setUserName()".
// THerefore we have to write it as setUserName.call(username) then the 1st function will get properly called.
// But still we are not getting the name in output.
// So for that we have to write as "setUserName.call(this , username)". This will tell the 1st function to use the "this" of the 2nd function.