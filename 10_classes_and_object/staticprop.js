class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

   static createId(){
        return "123";
    }
}

const hitesh = new User("Hitesh")
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        

        
        super(username);
        this.email = email;
    }
}
const chai = new Teacher("Shiva","shiva6335@gmail.com");
// console.log(chai.createId());
