const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = nums.map((num)=>{
    return num+10
})

console.log(newNums)


//chaining
const myNewNums = nums.map((num) => num*10).map((num) =>num+1)
console.log(myNewNums);

//chaining with map and filter
const myNewNums2 = nums.map((num) => num*10).map((num) =>num+1).filter((num) => num>40)

console.log(myNewNums2)
