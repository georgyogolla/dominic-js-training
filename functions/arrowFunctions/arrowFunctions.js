// function sayhi(){
//     console.log(`This is is the value of $${this}!`);
    
//     console.log("hello");
    
// }
// sayhi();

// www.cob.org
const nums = [2, 3, 4, 5, 6, 7];

// const sq = nums.map(function(n){
//     return n*n;
// })
// console.log(sq);

const sq = nums.map(n => n*n); //implicit return 
const sq3 = nums.map((n, y) => {
    return n*n;
}); //explicit  return 
console.log(sq);


function Person() {
    this.age = 0;
  
    setInterval(() => {
        console.log(`Value of this is: ${this}!`);
        
      this.age++; // `this` properly refers to the person object
    }, 1000);
  }
  
  const p = new Person();
  console.log(p);
  




