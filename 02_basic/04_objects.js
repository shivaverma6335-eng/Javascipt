// const tinderUser = new Object()
// console.log(tinderUser);    // {} => empty object


// const tinderUser = {}
// console.log(tinderUser);    // {} => empty object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser["name"] = "sammy"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        id : "123abc",
        username : {
            firstname : 'Shiva',
            lastname : 'Verma',
        }
    }
}

// console.log(regularUser.fullname.username.firstname);
// console.log(regularUser.fullname?.username?.firstname);    // ? => ye safer side krta h agar fullname present nhi hoga to undefined dega na ki error    (aage use hoga)


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
// const obj3 = {obj1 , obj2}  
// const obj3 = {...obj1 , ...obj2}    //spread
// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
// console.log(obj1);       obj3 === obj1

const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);    
// console.log(obj1);       

//database 
const user = [
    {
        id: 1,
        email : "shiva@gmail.com",
    },
    {
        id: 1,
        email : "shiva@gmail.com",
    },
    {
        id: 1,
        email : "shiva@gmail.com",
    },
]

// console.log(user[2].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



     //Destructuring

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh",
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);



// API
// backend se data json format me aata h 

// json 
// {
//     "name" : "shiva",
//     "course" : "Js  hindi",
//     "price" : "free",
// }

  // json
// [
//     {},
//     {},
//     {},
// ]
 

// json array aur object dono ho skta h

//use json formatter,random user api
