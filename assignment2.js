// Assignment 2: Operators, Expressions, and Input Handling

// ---- Browser version (using prompt()) ----
// Uncomment the lines below to run in a browser console:
// let billInput = prompt("Enter the bill amount:");
// let tipInput = prompt("Enter the tip percentage:");

// ---- Node.js / Demo version (hardcoded values for output) ----
let billInput = "100";
let tipInput = "15";

// Explicit type conversion using Number()
let subtotal = Number(billInput);
let tipPercentage = Number(tipInput);

// Compute the tip and total using arithmetic operators
let calculatedTip = (subtotal * tipPercentage) / 100;

// Using assignment operator (+=) to compute total
let totalAmount = subtotal;
totalAmount += calculatedTip;

// Log a formatted string using template literals
console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
