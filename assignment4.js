// Assignment 4: Loop Control Structures
// This script demonstrates for, while (with break), and do...while (with continue) loops.

// ─── 1. For Loop: Multiplication Table of 5 ────────────────────────
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// ─── 2. While Loop with Break: First number > 10 divisible by 6 ────
console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;
while (true) {
    if (num % 6 === 0) {
        console.log("Found: " + num);
        break;
    }
    num++;
}

// ─── 3. Do...While Loop with Continue: Skip even numbers from 1-10 ─
console.log("\n-- Odd numbers from 1 to 10 (skipping even using continue) --");

let n = 0;
do {
    n++;
    if (n % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(n);
} while (n < 10);
