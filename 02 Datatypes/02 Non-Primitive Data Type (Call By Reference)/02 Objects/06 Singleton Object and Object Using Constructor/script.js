//Singleton Object
const tinderUser = new Object();
// console.log(tinderUser);

//Object Literal 
// const tinderUser = {}
// console.log(tinderUser)

//Continue of Object Literal ->

// 1. Adding Values in Singleton Object
tinderUser.id = 1
tinderUser.name = "Vasu"
tinderUser.isLoggedIn = false

console.log(tinderUser)

// 2. Nested objects 
const regularUser = {
    email : "vasu@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Vasu",
            lastName : "Mehta"
        }
    }
} 

console.log(regularUser.fullName.userFullName)