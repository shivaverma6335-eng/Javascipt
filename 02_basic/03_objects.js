// objects
// declaration using literals => singleton nhi banega
// declaration using constructor => sinleton banega

//singleton
// Object.create (Constructor)

// object literals

const mySym = Symbol("key2")
// console.log(mySym);

const JsUser = {
    name: "Shiva",
    "full name" : "Shiva Verma",
    [mySym] : "myKey1",
    age:18,
    location: "Lucknow",
    email : "shiva@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);  // Only this syntax to access
// console.log(JsUser[mySym]);


JsUser.email = "shiva@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shiva@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}




// console.log(JsUser.greeting);  //[Function (anonymous)]    => this means function ka reference mila h execute nhi hua h 

console.log(JsUser.greeting());   // ab execute bhi hoga


console.log(JsUser.greetingtwo());   // ab execute bhi hoga



//undefined bhi aa rha isko baad me dekhenge