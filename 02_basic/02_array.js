const marvel_heros = ["thor","spiderman","Ironman"]

const dc_heros = ["superman","flashman","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


// push => orignal array me hi element ko push krta h
// concat => array ko combine krke new array return krta oginial array unaffected rhta h


//spread (drop a glass tumbler)

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// checking and converting into array

// console.log(Array.isArray("Shiva"));
// console.log(Array.isArray([1,2,3]));

// console.log(Array.from("Shiva"));
// console.log(Array.from({name: "Shiva"})); //intereting      ... agar ye array me convert nhi kr paya somehow then ye empty array return kr dega


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2,score3));
