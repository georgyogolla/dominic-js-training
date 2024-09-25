// The do...while statement repeats until a specified condition evaluates to false.


// let num = 10;

// do {
//     console.log(num);
//     num++;
// } while (num <= 20);





// A do-while loop is a control structure that repeatedly executes a block of code as long as a given condition is true. The loop will always execute at least once, even if the condition is false initially. Here's a practical industry example of how a do-while loop might be used in a real-world application:

// Example: Processing User Input in a Payment System
// In a payment system, let's say you're processing user input to ensure the user enters a valid payment amount. A do-while loop can be used to prompt the user for input, validate the amount, and keep asking for a valid value if the input is incorrect.

// Scenario:
// A banking application prompts a user to input the amount they wish to transfer. The system will continue to request input until the user enters a valid amount greater than zero.

// let isValidAmount = false;
// let amount = 0;

// do {
//     amount = parseFloat(prompt("Enter the amount you wish to transfer (greater than zero):"));

//     if (isNaN(amount) || amount <= 0) {
//         alert("Invalid amount. Please enter a valid positive number.");
//     } else {
//         isValidAmount = true;
//     }
// } while (!isValidAmount);

// console.log("Valid amount entered:", amount);


let amount;

do {
    // Prompt user to enter transfer amount
    amount = parseFloat(prompt("Enter the amount to transfer:"));

    // Check if the amount is valid number
    if (amount <= 0 || isNaN(amount)) {
        console.log("Invalid amount. Please enter a value greater than zero.");
    }
} while (amount <= 0 || isNaN(amount));

// Proceed with the transfer process
console.log(`You have successfully transferred $${amount}.`);
