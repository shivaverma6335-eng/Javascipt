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



// console.log(loginUserMessage());
  // ecommerce
// function calculateCartPrice(...num){   /// ... => rest operator
//     return num;
// }


// console.log(calculateCartPrice(100,499,599,999));

function calculateCartPrice(val1,val2,...num){   /// ... => rest operator
    return num;
}
    
console.log(calculateCartPrice(100,499,599,999));     // val1 = 100, val2 = 499  rest values goes to num



const user = {
    username : "shiva",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);    // ye pta krna padega ki username aur price ya koi bhi property exist krta h ki nhi 
}
     
handleObject(user)

const myNewArray = [400,500,800]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
