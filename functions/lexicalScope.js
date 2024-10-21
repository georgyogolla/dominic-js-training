// lexical scope

let z = 15;
function outer(){
    let x = 10;
    function inner(){
        let y = 20
        console.log(y);
        console.log(x);
        console.log(z);
        
    }
    inner();
    
}
outer();