const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of america')
map.set('FR', 'France')

// console.log(map)

for(const key of map){
    console.log(key)
}

for(const [key, values] of map){
    console.log(`${key} -> ${values}`)
}