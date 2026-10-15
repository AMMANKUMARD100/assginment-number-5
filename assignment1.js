// Assignment 1: Variables, Data Types, and Console Operations

// Declare variables using var, let, and const
var name = "Alice";           // var - function-scoped
let age = 25;                 // let - block-scoped, reassignable
const isEmployed = true;      // const - block-scoped, not reassignable
let skills = ["HTML", "CSS", "JavaScript"];

// Log each variable along with its type using typeof
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);
