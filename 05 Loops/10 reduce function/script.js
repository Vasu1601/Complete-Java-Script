const myNums = [1, 2, 3]

const total = myNums.reduce((acc, currrentVal) =>{
    console.log(`Acc value is ${acc} and current value is ${currrentVal}`)

    return acc+currrentVal
}, 0)

console.log(total);


//This is widely used when we have to make the shopping car in our e-commerce website