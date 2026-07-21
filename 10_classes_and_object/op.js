const user = {
    username:"Shiva",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
       console.log(`username: ${this.username}`);
       console.log(this);
       
       //  console.log('Got user details from database');
    }
}

console.log(user.username);
console.log(user.getUserDetails());

//current context ke liye this ka use krte h 

console.log(this);  // {}  abhi global context me kuch nhi hai
