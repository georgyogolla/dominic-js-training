const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort());
console.log("Using compareFn while sorting strings");
const compStr = (a, b) => a - b;


console.log(months.sort(compStr));

const array1 = [1, 30, 4, 21, 100000];
console.log(array1.sort());
console.log("using compareFn to sort integers");
console.log(array1.sort(compStr))

// compareFn - A function that determines the order of the elements

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  // sort values of items using compareFn
   const objSort = items.sort((a, b) => a.value - b.value);
   console.log(objSort);
