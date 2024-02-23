// js => function are treated as first class citizen

// arrow function
// anonymous function => function that does not have name
// () => {};

// const sayHi = (name) => {
//   console.log(`Hi ${name}`);
// };
// sayHi("Sumi");

// const getSum = (num1, num2) => {
//   const sum = num1 +    num2;

//   return sum;
// };
// const result = getSum(4, 7);
// console.log(result);

// const getProduct = (x, y) => {
//   const product = x * y;

//   return product;
// };
// const result = getProduct(6, 5);
// console.log(result);

// Assignment no 1))write a arrow function that checks if provided number is odd or even.

// const checkOddOrEven = (num) => {
//   let remainder = num % 2;
//   let result;
//   if (remainder === 0) {
//     result = `even ${num}`;
//   } else {
//     result = `odd ${num}`;
//   }
//   return result;
// };
// const result = checkOddOrEven(50);
// console.log(result);

// 3)
const calculator = (option, num1, num2) => {
  if (option === "add") {
    console.log(num1 + num2);
    return;
  } else if (option === "subtract") {
    console.log(num1 - num2);
  } else if (option === "multiply") {
    console.log(num1 * num2);
  } else if (option === "divide") {
    console.log(num1 / num2);
  } else {
    console.log("Invalid option");
  }
};
const result = calculator("multiply", 2, 10);
console.log(result);

// function calculateAverage(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {

//       let sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10
//   let average = sum/10;
//   return(average);
//   }
//   calculateAverage(1 , 2 ,3 ,4, 5, 6, 7, 8, 9, 10);
//   const result = calculateAverage
//   console.log(result);

// arrow function => concise Syntax
// more cleaner and more readable code
// this binding

// const addNumbers = (num1, num2) => {
//   let sum = num1 + num2;
//   return sum;
// };
// result = addNumbers(4, 6);
// console.log(result);

// another shortcut method

// const addNumbers = (num1, num2) => num1 + num2;

// let result = addNumbers(6, 6);
// console.log(result);

// ? odd even

// const checkOddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");
// const result = checkOddOrEven(5);
// console.log(result);

// write an arrow function that prints average of any three numbers
// const calculateAverage = (a, b, c) => {
//   let sum = a + b + c;
//   let average = sum / 3;
//   return average;
// };
// const average = calculateAverage(2, 3, 4);
// console.log(average);

// shortcut method
// const calculateAverage = (a, b, c) => ((a + b + c) / 3).toFixed(2);

// const average = calculateAverage(4, 7, 9);
// console.log(average);

// Assignment no 1)) WAF that calculates the factorial of a number using arrow function
// 5! => 5*4*3*2*1

// const getFactorial = (num) => {
//   let factorial = 1;

//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i; // factorial *= i; // x = x*i
//   }
//   return factorial;
// };
// const factorial = getFactorial(5);
// console.log(factorial);

//  Assignment no 2)) WAF that accepts first name and last name as argument and returns fullname

// const getFullName = (firstName, lastName) => {
//   let fullName = `${firstName} ${lastName}`;
//   return fullName;
// };
// const result = getFullName("ansu", "sumi");
// console.log(result);

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// const fullName = getFullName("Ansu", "Sumi");
// console.log(fullName);

// ? WAF that takes "Bearer abcd12345" as argument and return "abcd12345"

// const takesBear = (abcd12345) => {};
// takesBear(abcd12345);
