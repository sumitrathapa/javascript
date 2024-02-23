// conditionals

// execution => sequential
// console.log("Hello");

// let sum = 2 + 3;
// if(false){
//     console.log( sum );
// }

// console.log("Hi");

// If

// Syntax
// if (condition) {
//     some code here
// }

//  let x = 15;
//  let y = 2;
//  If (x < y) {
//     console.log("Hello mom");
// console.log("Hello dad");
// console.log("Hello bro");
//  }

//  if else

// Syntax
// if (condition) {
//     some code here
// } else{
//     some code here
// }

// let isPass = false;
//  if(isPass){
//     console.log("Congratulations,you have passed");
//  }else{
//     console.log("please try again..");
//  }

// Check if a number is odd or even.

// let num = 61;
// let remainder = num % 2;
// if (remainder === 0) {
//   console.log(`${num} is even`);
// } else {
//   console.log(`${num} is odd`);
// }

// if..else if..else

// if(conditiona1){
//     some code here
// }else if(condition2){
//     some code here
// }else{
//     some code here
// }

// let num = 0;
// if (num < 0) {
//   console.log("Negative number");
// } else if (num > 0) {
//   console.log("Positive number");
// } else {
//   console.log("Zero");
// }

// let x = 100;
// let y = 100;
// if (x > y) {
//   console.log("x is greater");
// } else if (x < y) {
//   console.log("y is greater");
// } else {
//   console.log("Both are equal");
// }

// let x = 4;
// let y = 5;
// let z = 6;
// if(x>y && x>z){
//     console.log(" x is greatest");
// }else if(y>x && y>z){
//     console.log("y is greatest");
// } else{
//     console.log("z is greater");
// }

// Conditionals practice // conditional assignment:

// Check if input variable is a number or not
// let x = 0;
// console.log(x);

// const type = typeof x;
// if (type === "number") {
//   console.log("X is a number");
// } else {
//   console.log("X is not a number");
// }

// 6.Find grades for student marks.
// a. If the mark is greater than or equal to 90, the grade is “A plus”.
// b. If the mark is greater than or equal to 80,the grade is “A”.
//  c.Grade “B”  from marks greater than equal to 70.
// d.“C” for marks greater than equal to 60.
// e. “F” for marks  less than 60.

// let marks = -145;
// if (marks > 100 || marks < 0) {
//   console.log("Out of range");
// } else if (marks >= 90 && marks <= 100) {
//   console.log("A+");
// } else if (marks >= 80 && marks <= 89) {
//   console.log("A");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("B");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("C");
// } else {
//   console.log("Try again,work hard");
// }

// 5.Perform arithmetic operation based on the option provided. Set two variables with numbers. Create another variable called “option” which can be add/subtract/multiply/divide/power.
// Based upon the value of the option. Perform appropriate operation.
// e.g. if option is “add”, perform num1+num2

// let num1 = 10;
// let num2 = 5;
// let option = "subtract";
// if (option === "add") {
//   console.log("num1 + num2");
// } else if (option === "subtract") {
//   console.log("num1 - num2");
// } else if (option === "multiply") {
//   console.log("num1 * num2");
// } else if (option === "divide") {
//   console.log("num1 / num2");
// } else if (option === "power") {
//   console.log("num1 ** num2");
// } else if (option === "remainder") {
//   console.log(num1 % num2);
// } else {
//   console.log("Invalid option");
// }

// let number = 10;
// let remainder = number % 2;
// if(remainder===0){
//     console.log(" even")
// }else{
//     console.log("odd");
// }
