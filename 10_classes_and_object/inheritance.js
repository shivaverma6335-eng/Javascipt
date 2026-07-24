class User {
    constructor(username){
        this.username = username;
    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username,email,pass){
         super(username)
        this.email = email;
        this.pass = pass;
    }
    addCourse(){
        console.log(`Anew course was added by ${this.username}`);
        
    }
}

const t1 = new Teacher("Hitesh","hitesh@gmail.com","567");

console.log(t1.logMe());

const masalaChai = new User("chai");

// masalaChai.addCourse()   // not work
masalaChai.logMe()
console.log(t1 instanceof Teacher);
console.log(t1 instanceof User);  //inheritance

