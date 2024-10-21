// Functions that operate on/with other
// functions. They can:
    // Accept other functions as arguments
    // Return a function

function callTwice(fn){
    fn();
    fn();
}

function laugh(){
    console.log("Hahaha!");
}

callTwice(laugh);



function makeBetween(min, max){
    return function(val){
        return val >=  min && val <= max; // returns boolean value

    }

}
const withinRange = makeBetween(18, 50);
console.log(withinRange(51)); 
