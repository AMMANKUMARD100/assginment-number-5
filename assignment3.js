// Assignment 3: Conditional Logic Implementation
// This script evaluates a test score, determines a letter grade,
// and prints the pass/fail status.

// ─── 1. Define the test score ───────────────────────────────────────
let score = 85;

// ─── 2. Determine the letter grade using if...else statements ───────
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score >= 0 && score < 60) {
    grade = "F";
} else {
    grade = "Invalid";
}

// ─── 3. Use a switch statement to confirm the grade category ────────
let gradeDescription;

switch (grade) {
    case "A":
        gradeDescription = "Excellent";
        break;
    case "B":
        gradeDescription = "Good";
        break;
    case "C":
        gradeDescription = "Average";
        break;
    case "D":
        gradeDescription = "Below Average";
        break;
    case "F":
        gradeDescription = "Failing";
        break;
    default:
        gradeDescription = "Invalid Score";
}

// ─── 4. Use a ternary operator to determine pass/fail status ────────
let status = score >= 60 ? "Passed" : "Failed";

// ─── 5. Print the results ───────────────────────────────────────────
console.log("Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);
