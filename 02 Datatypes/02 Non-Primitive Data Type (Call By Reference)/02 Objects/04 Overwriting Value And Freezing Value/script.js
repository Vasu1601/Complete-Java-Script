const jsUser = {
    firstName : "Vasu",
    fullName : "Vasu Mehta",
    location : "Punjab",
    age : 21,
    email : "vasu@gmail.com"
}

jsUser.fullName = "Vassu Mehta"
console.log(jsUser.fullName);

//Now if you want that the user is not able to edit then we can use freeze
Object.freeze(jsUser)
jsUser.email = "vasu@yahoo.com"
console.log(jsUser.email)