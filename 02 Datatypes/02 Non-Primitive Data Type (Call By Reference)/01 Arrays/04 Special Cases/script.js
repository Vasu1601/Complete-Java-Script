let marvelHeros = ["Thor", "Spider Man", "Ironamn"]
let DCHeros = ["Superman", "Batman", "Flash"]

// marvelHeros.push(DCHeros)
// console.log(marvelHeros);//Here we are not getting the output that we are expecting

//we can acheive a comman array by using concat
const allHeros = marvelHeros.concat(DCHeros)
console.log(allHeros);

//Another way by using spread operator
const allNewHeros = [...marvelHeros, ...DCHeros]
console.log(allNewHeros);
