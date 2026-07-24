function setUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username,email,password){
    this.email = email;
    // this.username = username;
    // setUsername(username)  //abhi ye call nhi hua h 
    setUsername.call(this,username) //aise call krna hota h  ...//this isliye pass kiya h kyuki iska this use ho 
    this.password = password;
}

const chai = new createUser("chai","chai@gmail.com","123");
console.log(chai);
