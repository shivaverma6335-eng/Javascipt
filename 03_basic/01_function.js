function sayName(){
    console.log("Shiva");
}


// sayName()

// function addTwoNumbers(number1,number2){
//     console.log( number1 + number2);
// }

function addTwoNumbers(number1,number2){
     return  number1 + number2
 }

const result =  addTwoNumbers(4,5)
// console.log(result);

// function loginUserMessage(username){
//    if(!username){
//     console.log(`Please enter a username`);
//     return 
//    }
//     return `${username} just logged In`
// }

function loginUserMessage(username = "Sam"){    // by default username is Sam
    if(!username){
    console.log(`Please enter a username`);
    return 
   }
    return `${username} just logged In`
}



console.log(loginUserMessage());

