const getName = new String("Vasu");

console.log(`This is method 1 ${getName.__proto__}`);
console.log(`This is method 2 ${getName.length}`);
console.log(`This is method 3 ${getName.toUpperCase()}`);
console.log(`This is method 4 ${getName.charAt(2)}`);
console.log(`This is method 5 ${getName.indexOf('s')}`);
console.log(`This is method 6 ${getName.substring(0,2)}`);
console.log(`This is method 7 ${getName.slice(0,2)}`);

const newName = "  Vasu  ";
console.log(`This is method 8 ${getName.trim()}`);

const url = "https://vasu.com/vasu20%mehta";
console.log(`This is method 9 ${url.replace('20%','-')}`);
console.log(`This is method 9 ${url.includes('sundar')}`);
