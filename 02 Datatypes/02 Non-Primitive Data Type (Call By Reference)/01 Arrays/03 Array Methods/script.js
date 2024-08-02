const myArr = new Array(1,2,3,4,5,7,9)
//Push
myArr.push(6)
console.log(`This is output after push method ${myArr}`);

//pop
myArr.pop()
console.log(`This is output after pop method ${myArr}`);

//unshift
myArr.unshift(9)
console.log(`This is output after unshift method ${myArr}`);

//shift
myArr.shift()
console.log(`This is output after shift method ${myArr}`);


//includes
console.log(`Do the array includes 9 -> ${myArr.includes(9)}`);


//indexof
console.log(`The index of 1 is ${myArr.indexOf(1)}`);

//join
const newArr = myArr.join()
console.log(`The new array after join is ${newArr}`)

//slice
const newArr2 = myArr.slice(0,3);
console.log(`Array after Slice method is ${newArr2}`)

//splice
const newArr3 = myArr.splice(1,3)
console.log(`The new array after splice is ${newArr3}`);

