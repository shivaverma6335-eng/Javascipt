const name = "shiva"
const repoCount = 50

// console.log(name + repoCount + " Value");


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Shiva-abhishek-verma')

// console.log(gameName[0]);



// console.log(gameName.__proto__);



// console.log(gameName.length);


// console.log(typeof gameName)

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));


// console.log(gameName.indexOf('i'));


const newSting = name.substring(0,4)

console.log(newSting);

const newStringOne = " \n  shiva    \n "
console.log(newStringOne);
console.log(newStringOne.trim());     // it will remove starting and ending spaces (extra spaces),it will also trim the newline


const url = "htttps://shiva.com/shiva%20verma"

console.log(url.replace("%20","-"));

console.log(url.replace("shiva","abhishek"));

console.log(url.replaceAll("shiva","abhishek"));
 
console.log(gameName.split('-'))


const mystr = "My name is Shiva Verma"

// console.log(`The charcater at index ${5} is ${mystr.at(5)}`);


// console.log("".concat({}));
// console.log("".concat([]));
// console.log("".concat(null));
// console.log("".concat(null));
// console.log("".concat([true]));
// console.log(("".concat([true])).toUpperCase());
// console.log("".concat(4,5));


const str = "hey 'JudE";
const re = /[u]/;
const reDot = /[']/;
// console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
// console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation