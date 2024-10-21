// Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.

let bird = "parrots";

function birds(){
    let bird = "eagle";
    console.log(bird);
}
console.log(bird);
birds();

const num1 = 20;
const num2 = 3;
const name = "Chamakh";

function multiply(){
    return num1 * num2;
}

console.log(multiply());

function scores(){
    function scores2(){
        // return `${name} scored ${num1 * num2}`;
        return `${name} scored ${multiply()}`;
    }
    return scores2();
}
console.log(num1);

console.log(scores());
console.log(multiply());