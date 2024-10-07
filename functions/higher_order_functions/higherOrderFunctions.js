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