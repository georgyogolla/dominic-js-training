// A callback function is a function
// passed into another function as an
// argument, which is then invoked inside
// the outer function.


function callTwice(fn){
    fn();
    fn();
}

function laugh(){
    console.log("Hahaha!");
}

callTwice(laugh);