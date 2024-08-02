function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(2,5)
console.log(result);

//Printing using return
function logInUserMessage(username){
    return `${username}, Welcome Back`
}

console.log(logInUserMessage("Vasu"));

//Now may be user forgot to give name so we can handle that by using if else statement

function logInUserMessage2(username){
    if(username === undefined){
        return `Please enter something`
    }

    return `${username}, Welcome back`
}

console.log(logInUserMessage2())
