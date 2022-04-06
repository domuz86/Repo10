//Only change code below this line

var myPet = {
    species: "Dog",
    name: "Waf",
    legs: 4,
    friends: ["Tom","Jerry"]
};

function myFunction(myObj){
    return myObj;
}

//Only change code above this line
console.log(myFunction(myPet));
module.exports = {myPet, myFunction};