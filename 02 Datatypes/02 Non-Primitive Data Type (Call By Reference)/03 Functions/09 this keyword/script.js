const user = {
    username : "Vasu",
    rank: 1,
    welcomeUser : function(){
        console.log(`${this.username}, welcome`)
    }
}

user.welcomeUser()
user.username = "Sam"
user.welcomeUser()

console.log(this)

//What if we console log in function
function any(){
    console.log(this);
}
any()

//what if we use this in function -> You will get undefined
function chai(){
    let userName = "Vasu"
    console.log(this.userName)
}
chai()