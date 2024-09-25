// A while statement executes its statements as long as a specified condition evaluates to true

// SYNTAX
// while(condition)
//     statement

let n = 0;
let x = 0;

while(n < 5) {
    n++;
    x += n;    
}
console.log(x); // Output: 15
console.log(n);


// continue

let i = 0;
let z = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  z += i;
  console.log(z);
}
// Logs:
// 1 3 7 12




// using continue with label
let a = 0;
let j = 10;
checkaandj: while (a < 4) {
  console.log(a);
  a += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", a);
  console.log("j =", j);
}


