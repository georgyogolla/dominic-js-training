let radius = 4;
let newModel = "Q7"

function blockScope(){
    console.log(radius);
    if(radius > 0){
        // console.log(radius);
        
        const PI = 3.14;
        console.log(PI);
        let circ = 2 * PI * radius;
        console.log(circ);
    }
    console.log(newModel);
    
}
 blockScope();
 console.log(radius);
// console.log(PI);
// console.log(circ);

function sum(a = 5 , b = 15){
    return a + b;
    // console.log(a);
    
}
const a1 = sum(10, 20);
console.log(a1);

const add = function(c, d){
    return c + d;
};
console.log(add(100, 35));



