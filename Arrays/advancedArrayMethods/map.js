// The map() method calls a provided function on every element inside an array and returns the result from the function call in a new array.
const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map((num) => num + 2);
console.log(doubleNums);

// Extract specific property from an object
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  console.log(`Items Before map: ${items}`);
  const vals = items.map(item => item.value * 2);
  console.log(`Items After map: ${items}`);
  console.log(vals);
 
