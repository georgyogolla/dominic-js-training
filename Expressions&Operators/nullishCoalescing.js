// Nullish coalescing assignment (??=)
// The nullish coalescing assignment (??=) operator, 
// also known as the logical nullish assignment operator, 
//only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

const plants = {fruits: "orange",};
plants.fruit ??=  "mango";
plants.color ??= "red";
// plants ?? (color = "red");
plants.fruits ??= "pineapple";

// Short-circuiting is jargon for conditional evaluation. 
// For example, in the expression a && (b + c), 
// if a is falsy, then the sub-expression (b + c) will not even get evaluated, 
// even if it is grouped and therefore has higher precedence than &&
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
console.log(plants);

function config(options) {
    options.duration ??= 100;
    options.speed ??= 25;
    return options;
  }
  
  config({ duration: 125 }); // { duration: 125, speed: 25 } // duration argument in the function call overrides the declared duration
  config({}); // { duration: 100, speed: 25 }


  // NULLISH COALESCING OPERATOR
// expre1 ?? expre2
// Returns expr1 if it is neither null nor undefined; otherwise, returns expr2.
// e.g
  console.log(1 ?? 2); // 1
  console.log(null || 3); //3