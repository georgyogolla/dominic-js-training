let radius = 4;

function blockScope(){
    if(radius > 0){
        const PI = 3.14;
        console.log(PI);
        let circ = 2 * PI * radius;
        console.log(circ);
    }
}
 blockScope();
 console.log(radius);
// console.log(PI);
// console.log(circ);


