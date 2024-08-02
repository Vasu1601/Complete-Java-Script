const myFunction = ()=>{
    let userName = "Vasu"
    console.log(this)
}
myFunction()

//with parameters
const addNum = (num1 , num2) => {
    return num1 + num2
}
console.log(addNum(5,5))
