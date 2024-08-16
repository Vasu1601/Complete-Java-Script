//This loop is used to iterate on Objects

const obj = {
    js: 'Java Script',
    cpp : 'C++',
    rb : 'ruby'
}

for(const key in obj){
    console.log(key)
}

console.log();

for(const key in obj){
    console.log(obj[key])
}