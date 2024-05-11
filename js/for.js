// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// function name(params=10) {
//     return params;
// }
// name(10)


const numbers = [2, 4, 6 , 8 , 10];


const doubled = numbers.map(num => num * 2);
// console.log(doubled);
const fiveBounce = numbers.map(num => num + 5);
// console.log(fiveBounce);
const halves = numbers.map(num => num / 2);

const friends = ['Rayhan', 'Nasir', 'Forhad', 'Tapazzul'];
const lengths = friends.map(fri => fri.length);
// console.log(lengths);
const fastLetters = friends.map(frie => frie[0]);
console.log(fastLetters);







// const buttols = [];

// function boubled(num){
//    console.log("num boubled", num);
//    return num * 2;
// }
// const result = numbers.map(boubled);
// console.log(result);

// for (const num of numbers) {
//     const boubled = num * 2;
//     buttols.push(boubled);
// }
// console.log(buttols);