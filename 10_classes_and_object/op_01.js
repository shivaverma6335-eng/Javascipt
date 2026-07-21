function User(username, loginCount,isLoggegIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggegIn;
  return this   // ye likho ya na likho ye jo object bna usko return karega hi fn


}
    
const userOne = new User("shiva",12,true)
const userTwo = new User("chaiaurcode",12,true)

console.log(userOne);
console.log(userTwo);
