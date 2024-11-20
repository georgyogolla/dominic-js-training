// There are two special kinds of parameter syntax: default parameters and rest parameters.

// old way of using default parameters
function add(x, y){
    y = typeof y !== "undefined"? y : 9;
    return x + y;
}
console.log(add(5)); // 14

// new way of using default parameters
function add2(x, y = 9){
    return x + y;
}
console.log(add2(5)); // 14

// Rest parameters
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]