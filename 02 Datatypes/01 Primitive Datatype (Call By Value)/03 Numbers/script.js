const score = 30;
const balance = new Number(78);

console.log(`Score is ${score} and balance is ${balance}`);
console.log(`This is method 1 ${balance.toString()}`);
console.log(`This is method 2 ${balance.toFixed(1)}`);

const otherNumber = 123.54778;
console.log(`This is method 3 ${otherNumber.toPrecision(4)}`);

const hundreds = 1000000;
console.log(`This is method 4 ${hundreds.toLocaleString()}`); 