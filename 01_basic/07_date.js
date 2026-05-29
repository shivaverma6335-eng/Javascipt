// Dates

let myDate = new Date()
// console.log(myDate);
       // diff format
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// console.log(myDate.getDay());
// console.log(myDate.getTime()); // milisecond h ideal date se (1950)
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());  // month start from 0
 
// let myCreatedDate = new Date(2026,4,28,22,25,45);    // new(year,month,date,hour,min,second)
//  let myCreatedDate = new Date("2026-05-28"); // yy/mm//dd
 let myCreatedDate = new Date("05-28-2026"); // mm/dd//yy
    // console.log(myCreatedDate.toLocaleString());


//timestamp used in poles,quizz

let myTimeStamp = Date.now();  // milisec me ayega 
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000)); // converting milisec to sec

let newDate = new Date(2026,5,28);
console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));                // customization


