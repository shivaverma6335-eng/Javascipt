// array

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);

//   Array Methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr);


// console.log(myArr.includes(5));   // return booleun datatype

// console.log(myArr.indexOf(9));   // retutn -1 if element is not present
// console.log(myArr.indexOf(3));    // return index of element 


// const arr = myArr.join()   // it converts array element into string including commas ("0,1,2,3,4,5")
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[2]);


// console.log("Shiva",50);



// slice splice


console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" ,myArr);

     // Difference b/w slice and splice
// slice => original array se elemnt ko remove nhi krta .return a copy of element from start to end index excluding end index
//splice => original array se element ko remove kr deta h .return a copy of element from start to end index including end index



