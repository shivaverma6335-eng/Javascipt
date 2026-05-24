const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(typeof score);
console.log(typeof balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 23.2936

console.log(otherNumber.toPrecision(1));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'));
 


// ++++++++++++++++++++Maths++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5)); //5
console.log(Math.round(5.4));   //5
console.log(Math.round(5.7));  //6
console.log(Math.ceil(5.2));   // 6    ..always upper value
console.log(Math.floor(5.8));  //5   // always lower value

console.log(Math.min(4,3,2,1));
console.log(Math.max(4,3,2,1));

console.log(Math.random()) // random number b/w 0-1 


console.log((Math.random()*10) + 1);//number 1-10
 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min );

console.log(Math.trunc(5.3));

console.log(Math.round(-5.3));
console.log(Math.round(-5.7));
console.log(Math.trunc(-5.7));

 

