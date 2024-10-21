// All function declarations are effectively at the top of the scope

// Function hoisting only works with function declarations — not with function expressions.

console.log(square(10));

function square(x){
    return x * x;
}