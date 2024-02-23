// function
// block of code which perform specific operation

// reduces code repetition
// enhances code reuse

// function functionName(){
//   some code here
// }

// function sayHello(studentName) {
//   console.log(`Hello ${studentName}`);
// }
// sayHello("Ansu");

// function getSum() {
//   let num1 = 4;
//   let num2 = 5;
//   let sum = num1 + num2;
//   console.log(sum);
// }
// getSum();

// function getSum(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }
// getSum(4, 5);

// WAF that multiplies three numbers

// function calculateProduct(x, y, z) {
//   let product = x * y * z;
//   console.log(product);
// }
// calculateProduct(5, 4, 3);

// no 1. Assignment WAF that checks if provided number which is odd or even

// function checkOddOrEven(num) {
//   let remainder = num % 2;
//   if (remainder === 0) {
//     console.log(`${num} is even`);
//   } else {
//     console.log(`${num} is odd`);
//   }
// }
// checkOddOrEven(4);
// checkOddOrEven(5);

// Assignment no 3)  Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as parameters and perform appropriate operations.

// function calculator(option, num1, num2) {
//   if (option === "add") {
//     console.log(num1 + num2);
//   } else if (option === "subtract") {
//     console.log(num1 - num2);
//   } else if (option === "multiply") {
//     console.log(num1 * num2);
//   } else if (option === "divide") {
//     console.log(num1 / num2);
//   } else {
//     console.log("Invalid option");
//   }
// }
// calculator("multiply", 10, 3);

//  Assignment no 4) Write a function that takes day of week as parameter and returns 1,2,3,4,5,6. Example.. Provided sunday should return 1,monday returns 2

// function getDayNumber(dayOfWeek) {
//   switch (dayOfWeek) {
//     case "Sunday": {
//       console.log(1);
//       break;
//     }
//     case "Monday": {
//       console.log(2);
//       break;
//     }
//     case "Tuesday": {
//       console.log(3);
//       break;
//     }
//     case "Wednesday": {
//       console.log(4);
//       break;
//     }
//     case "Thursday": {
//       console.log(5);
//       break;
//     }
//     case "Friday": {
//       console.log(6);
//       break;
//     }
//     case "Saturday": {
//       console.log(7);
//       break;
//     }
//     default:
//       console.log("Invalid day");
//   }
// }
// getDayNumber("Tuesday");

//  Assignment no 6))Write a function that takes 10 numbers and calculates the average of the provided numbers.

// function calculateAverage(
//   num1,
//   num2,
//   num3,
//   num4,
//   num5,
//   num6,
//   num7,
//   num8,
//   num9,
//   num10
// ) {
//   // parameter;
//   let sum =
//     num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
//   let average = sum / 10;
//   console.log(average);
// }
// calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //Argument =>concrete value

// Assignment no 2)) Write a function that takes a number and prints value from 0 to that number (use while loop).

// function printValue(number) {
//   let i = 0;
//   while (i <= number) {
//     console.log(i);
//     i++;
//   }
// }
// printValue(6);

// function sayHi() {
//   return [11, 12];
// }
// const result = sayHi();
// console.log(result);

// Assignment no 7)) WAF that converts dollars into cents

//  cents = dollar * 100

// function convertDollarToCents(dollar) {
//   const cents = dollar * 100;
//   return cents;
// }
// const result = convertDollarToCents(15);
// console.log(result);

// WAf that converts Rupees to paisa

// function convertsRupeesTOPaisa(rupees) {
//   const paisa = rupees * 100;
//   return paisa;
// }
// const result = convertsRupeesTOPaisa(5);
// console.log(result);

// Another method

// let rs = 5;
// function rupeesToPaisa() {
//   paisa = rs * 100;
// }
// rupeesToPaisa();
// console.log(paisa);

// Assignment no 6))Write a function that takes a number as a parameter and returns a sum from 0 to that number. E.g if number is 5 then function should return 0+1+2+3+4+5=15

// let sum = 0;
// function getSum(num) {
//   for (let i = 0; i <= num; i++) {
//     sum = sum + i;
//   }
// }
// getSum(10);
// console.log(sum);

//Assignment no 8)) WAF that converts temperature in celsius into fahrenheit.

// function convertCelsiusToFahrenheit(celsius) {
//   let fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }
// let fahrenheit = convertCelsiusToFahrenheit(-30);
// console.log(fahrenheit);

// function printValues(startValue, endValue) {
//   if (startValue > endValue) {
//     console.log("star value must be less than end value");
//     return;
//   }
//   for (let i = startValue; i <= endValue; i++) {
//     console.log(i);
//   }
// }
// printValues(20, 30);
