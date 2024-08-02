function one(){
    const myName = "Vasu"

    function two(){
        const website = "youtube"
        console.log(myName)
    }
    // console.log(website) //Error here because out of scope
    two()
}

one()