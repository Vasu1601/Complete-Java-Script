const jsUser = {
    firstName : "Vasu",
    fullName : "Vasu Mehta",
    age : 21,
    email : "vasu@gamil.com"
}

jsUser.greeting = function(){
    console.log(`Hello ${this.fullName}`)
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());