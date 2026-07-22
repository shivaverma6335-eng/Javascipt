function User(username, loginCount,isLoggegIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggegIn;

    this.greeting = function(){
        console.log(`Welcome : ${this.username}`);
        
    }
  return this   // ye likho ya na likho ye jo object bna usko return karega hi fn


}
    
const userOne = new User("shiva",12,true)
const userTwo = new User("chaiaurcode",12,true)
userOne.greeting()
console.log(userOne.username);
console.log(userTwo);
