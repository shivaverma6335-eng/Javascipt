//promise creation

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    } ,1000)
})
   



//resolve => .then 
// reject => .catch

// promise consume
promiseOne.then(function(){
    console.log('Promise consumed');    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){ 
        resolve({username:'Shiva',email:'shiva.gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);   
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error) resolve({username:"Shiva Verma",password:'123'})
            else reject('ERROR:Something wnet wrong')
    },1000)
})

promiseFour.then( (user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);    
}).catch(function(error){
    console.log(error);  
}).finally(()=>{
    console.log('The promise is either resolved or rejected');
})


// .finally wala to chalega hi chahe resolve caal ho ya reject


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error) resolve({username:"Js ",password:'123'})
            else reject('ERROR:js wnet wrong')
    },1000)
})
async function consumeFivePromise(){
    try {
        const response  = await promiseFive
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}

consumeFivePromise()

// async function getAllUsers(){
//     try {
//       const response =  await fetch('https://api.github.com/users/hiteshchoudhary')

//     //   console.log(response);
      
//     //   const data = response.json()      // convert hone me bhi time lgta h isliye ye aise nhi chalega await lagana padega
//     //   console.log(data);


//     const data = await response.json()
//     console.log(data);
    

//     } catch (error) {
//         console.log('E:',error); 
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()})
.then((data) => console.log(data))
.catch((error) => console.log(error))