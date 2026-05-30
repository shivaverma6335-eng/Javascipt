let a = 300
if(true){
    let a = 10
   const b = 20
    var c = 30
//    console.log(`Inner: ${a}`);
}

// global scope,  block scope

//{}  //scope
// console.log(a);   // scope me nhi h 
// console.log(b);   // scope me nhi h 
// console.log(c);    // var scope ke bahar bhi acces ho jata h



// global scope code environment mein(node ke through example run krte h) aur browser mein scope  alag alag hota h 



function one(){
    const username = 'Shiva'

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);
    
    two()
}

// one()


if(true){
    const username = "Shiva"
    if(true){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++Interesting +++++++++


console.log(addone(5));    
// function ko aise declare krne pr function definition se phle bhi acces ho jata h fn
function addone(num){
    return num + 1
}

// console.log(addone(5));

console.log(addTwo(5));
// function ko aise declare krne pr initialisation se phle access nhi kr skte h
const addTwo = function(num){
    return num + 2
}


// console.log(addTwo(5));

