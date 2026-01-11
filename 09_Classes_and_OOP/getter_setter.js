class User{
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get password(){
        // return this.password.toUpperCase()

        return this._password.toUpperCase()

        // return `${this._password}Utkarsh`    // we can also use this format, here output will be "abcUtkarsh".

    }
    // Here if we write only getter and run the code then it will giev error because whenever we use the getter we have to give setter also.

    set password(value){
        // this.password = value.toUpperCase()

        this._password = value  // Here though we are not using uppercase we are getting the password in Uppercase.
    }

    // Here as setter is setting any kind of value for that we have to give a value inside it (as given "value" here.)


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const utkarsh = new User("uk@google.com" , "abc")

console.log(utkarsh.password)

console.log(utkarsh.email)

// In some cases if you don't want to give the direct access of the let's say password, you want to give the Encrypted Password or say that I can't give, for all these type of sittuation we use Getters and Setters.

// In each class by default getters and setters are present but we have not given anything to them so they show theor default behaviour.

// Here as you have names of the different properties, there are already gettersr and setters made up of the same name and available as "Method".

// Here after using get and set, if we run the code then we will get error as "Maximum call stack exceed", because here both the constructor and the "set" trying to set the value that's why this happens.

// So for that we have to declare an totally new variable like given here "_password". But if we use it in only "set" as we are getting error of setter then now we will get error due to "get".

// So conclusion is we have to use a very new variable at both "get & set". Then it will work correctly. So now the constructor is storing the value of "email" only because the value of password is over-written by the getter and setter.