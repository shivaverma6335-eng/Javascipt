let a = 300
if(true){
    let a = 10
   const b = 20
    var c = 30
   console.log(`Inner: ${a}`);
}

// global scope,  block scope

//{}  //scope
console.log(a);   // scope me nhi h 
// console.log(b);   // scope me nhi h 
console.log(c);    // var scope ke bahar bhi acces ho jata h



// global scope code environment mein(node ke through example run krte h) aur browser mein scope  alag alag hota h 