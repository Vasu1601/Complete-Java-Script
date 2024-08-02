const tinderUser = {
    id : "abc12",
    fullName : "Vassu Mehta",
    isLoggedIn : false
}
console.log(Object.keys(tinderUser))

//To access values
console.log(Object.values(tinderUser))

//to access enteries
console.log(Object.entries(tinderUser));

//To check if particular property is there in Object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));