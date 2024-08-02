console.log(`This is method 1 ${Math.abs(-4)}`);
console.log(`This is method 2 ${Math.round(4.6)}`)
console.log(`This is method 3 ${Math.ceil(4.2)}`)
console.log(`This is method 4 ${Math.floor(4.2)}`)
console.log(`This is method 5 ${Math.min(3,6,1,7)}`)
console.log(`This is method 6 ${Math.max(3,6,1,7)}`)
console.log(`This is method 7 ${Math.random()}`)

//Generating random number in a range
const min = 20;
const max = 50;

const number = Math.floor(Math.random()*(max - min + 1) + min)

console.log(number)