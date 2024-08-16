//This is basically a function

const coding = ['Java Script', 'Ruby', 'Java', 'C++']

coding.forEach(function(val){
    console.log(val)
})

console.log()

//Using arrow function
coding.forEach((value) =>{
    console.log(value)
})

console.log();

//using predefined funtion
function printMe(value){
    console.log(value);
}
coding.forEach(printMe)

console.log();

//function has access to index and array as well
coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})