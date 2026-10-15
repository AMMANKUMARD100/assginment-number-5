// Assignment 5: Function Architecture and Scope
// This script demonstrates standard functions, arrow functions,
// default parameters, and function/block scope.

// ─── 1. Standard Function with Default Parameters ──────────────────
function calculateArea(length = 5, width = 4) {
    return length * width;
}

console.log("Standard Function Area (Default 5x4): " + calculateArea());

// ─── 2. Arrow Function with Parameters ─────────────────────────────
const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

console.log("Arrow Function Area (Custom 10x3): " + calculateAreaArrow(10, 3));

// ─── 3. Demonstrate Function and Block Scope ────────────────────────
console.log("");

// Block scope demonstration
{
    let blockVar = "I exist only inside this block";
    const blockConst = "Me too!";
    console.log("Inside block: " + blockVar);
}

// Trying to access blockVar outside the block
try {
    eval("console.log(blockVar)");
} catch (error) {
    console.log("Scope Test Error: " + error.constructor.name + ": " + error.message + " (when accessed outside block)");
}

// Function scope demonstration
function scopeDemo() {
    var functionVar = "I exist only inside this function";
    console.log("Inside function: " + functionVar);
}

scopeDemo();

try {
    console.log(functionVar);
} catch (error) {
    console.log("Function Scope Error: " + error.constructor.name + ": " + error.message);
}
