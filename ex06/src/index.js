//Create lion object here

var lion = {
  name: "Simba",
 legs: 4,
 tails: 1
}

//End of lion object

//Create a function belowe this line

function myFunction(a,b){

   lion[a] = b+"-"+b;


    return lion;
}
myFunction("roar", "roar");
//End of function
module.exports = myFunction;