//ES6

class User{
    constructor(username,email,pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptPassword(){
        return `${this.pass}abc`;
    }
    changeUSername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("shiva","shiva@gmail.com","123");
console.log(chai.encryptPassword());
console.log(chai.changeUSername());


// behind the scene
function user(username,email,pass){
    this.username = username;
        this.email = email;
        this.pass = pass;
}

user.prototype.encryptPassword = function(){
        return `${this.pass}abc`;
}
const tea = new user("tea","tea@gmail.com","145");
console.log(tea.encryptPassword());
