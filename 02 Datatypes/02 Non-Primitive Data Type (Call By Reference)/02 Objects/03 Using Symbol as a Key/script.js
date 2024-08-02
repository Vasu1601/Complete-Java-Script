 /*
 const mySym = Symbol("Key1");

 const jsUser = {
    name : "Vasu",
    "fullname" : "Vasu Mehta",
    mySym : "myKey1",
    age : 18,
    email : "vasu@gmail.com"
 }

 console.log(mySym)
 console.log(typeof jsUser.mySym)
 */

 //Prefer to use this approach
 
 const mySym = Symbol("Key1");

 const jsUser = {
   name : "Vasu",
   "fullname" : "Vasu Mehta",
   mySym : "myKey1",
   age : 18,
   email : "vasu@gmail.com"
}

console.log(jsUser["mySym"])
console.log(typeof jsUser["mySym"])