function call(a, b, func){
    return func(a, b)
}

function add(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}    

console.log(call(1, 5, add))
console.log(call(1, 5, sub))


//Call back function means when you pass function as an argument while calling a function and then use just single parameter function to call multiple functions