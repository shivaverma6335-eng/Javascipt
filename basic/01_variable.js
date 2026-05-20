const accountId = 14453
let accountEmail = "shiva@635gmail.com"
var accountPassword = "12234"
accountCity = "Lucknow"
let accountState
//accountId = 2  // not allowed
console.log(accountId);


/*
 Prefer not to use var 
 because of issue in block scope and functional scope
*/
accountEmail = "sv@gmail.com"
accountPassword = "Shiva"
accountCity = "Begluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])