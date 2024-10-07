// write a function to print out square of numbers
// function printSquare(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         console.log(numbers[i] * numbers[i]);
           
//     }

// }
//  printSquare([4, 3, 2]);

function printSquare(numbers){
    let squares = [];
    for(let i = 0; i < numbers.length; i++){
        squares.push(numbers[i] * numbers[i]);
           
    }
    return squares;

}
 const n = printSquare([8, 7, 6, 4, 3, 2]);
 console.log(n);
 

