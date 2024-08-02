function handleObject(anyObject){
    return `Username is ${anyObject.name} and the rank is ${anyObject.price}`
}

const ans = handleObject({
    name: "Vasu",
    price: 1
})

console.log(ans);
