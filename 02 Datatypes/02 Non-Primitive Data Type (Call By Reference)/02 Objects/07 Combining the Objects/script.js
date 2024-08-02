const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}

const obj3 = {obj1, obj2}
console.log(obj3);

// const obj4 = Object.assign(obj1, obj2)
// console.log(obj1);//This object also get modified 
// console.log(obj4)

//To prevent from getting modified we can do something like that
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj1);
console.log(obj5);
