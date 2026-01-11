class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is : ${this.username}`)
    }

    // createId(){
    //     return `123`
    // }

    static createId(){
        return `123`
    }
}

const utkarsh = new user("Utkarsh")
// console.log(utkarsh.createId())

// SO in many cases you don't want to give the access of the createId() method to every object whch is instantiated from this "user" class.
// So to do so just make that method "static".


class Teacher extends user{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "i@phone.com")
console.log(iphone)

iphone.logMe()
// console.log(iphone.createId())  // This also will not get the access.