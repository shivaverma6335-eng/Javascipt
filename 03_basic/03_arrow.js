const user = {
    username: "Shiva",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
    // this function current context ke liye use hota h
}
// console.log(user);

//  user.welcomeMessage()

//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);    // empty object {}

// phle js ko run karane ke liye browser ki help leni pdti thi mtlb browser me engine hota tha whi run karata tha lekin ab engine jo run karata h wo standalone h



//browser me global object h window


// function chai(){
//     let username  = 
//     'shiva'
//     console.log(this.username);     //undefined
// }

// this wala jo scene h cintext ye function me nhi kaam kr raha h ye object me hi kaam krta h 

// chai()

// const chai = function(){
//         let username  =  'shiva'
//     console.log(this.username); 
// }

// chai()




const chai = () => {
        let username  =  'shiva'
    console.log(this.username); 
    // console.log(this);     // {}
}

// chai()



// Arrow function


// const addTwo = (num1 ,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1 ,num2) =>  num1 + num2     //implicitly return 
// const addTwo = (num1 ,num2) =>  (num1 + num2)      //implicitly return 




// if () then return nhi likhna h
// if {} then using return keyword is mandatory

   // returning object
const addTwo = (num1 ,num2) =>   ({username:"Shiva"})   //implicitly return 


console.log(addTwo(3,4));
