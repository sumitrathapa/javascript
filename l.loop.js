// loop
// iteration => repetation

// for
// while
// do..while

// for
// syntax

// for(initial_value; Condition;Increment / decrement){
//     some code here
// }

// loop => 10
// for (let i = 0; i <= 3; i = i + 1) {
//   console.log("Hi", i);
// }

//  wap to print the value from 1 to 10

// when loop is not used
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// when loop is used

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);
// }

// 10 to 1

// for (let i = 10; i >= 1; i = i - 1) {
//   console.log(i);
// }

// infinite loop => loop that doesnot terminate

// 2. Assignment WAp to print the value from 12 t0 24

// for (let i = 12; i <= 24; i = i + 1) {
//   console.log(i);
// }

// 6. Assignment WAP to print the value from 100 to 50

// for (let i = 100; i >= 50; i = i - 1) {
//   console.log(i);
// }

// No 5. Assignment // Write a JavaScript for loop that iterates from 30 to 100. For each iteration, it checks if the current number is odd or even and displays a message on the screen.
// Sample Output :

// "1 is odd"
// "2 is even"

// for (let i = 30; i <= 100; i = i + 1) {
//   let remainder = i % 2;
//   if (remainder === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// 3. Assignment WAP to add number from 1 to 10 using for loop.

// let sum = 0;
// for (let i = 1; i <= 10; i = i + 1) {
//   sum = sum + i;
// }
// console.log(sum);

// 8. Assignment WAP to print product of numbers from 1 to 5

// let product = 1;
// for (let i = 1; i <= 5; i = i++) {
//   product = product * i;
// }
// console.log(product);

//  7. Assignment    Write a JS code to print square of numbers from   1 to n

// let square;

// for (let i = 1; i <= 5; i = i + 1) {
//   square = i ** 2;
//   console.log(`square of ${i} =`, square);

// }

// while

//  syntax
// initial value
// While (condition){
//     some code here
// increment/decrement
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i = i + 1;
// }

// WAp to print the value from 20 to 10 using while loop.
// let i = 20;
// while (i >= 10) {
//   console.log(i);
//   i = i - 1;
// }

// WAP to print even numbers from 1 to 50 using while

// let i = 1;
// while (i <= 50) {
//   let remainder = i % 2;
//   if (remainder === 0) {
//     console.log(i);
//   }
//   i++;
// }

// i++ => i = i+1
// i-- => i = i-1

// do..while loop
// Syntax

// initial value
// do {
//     some code here
//     increment/decrement
// } while (condition);

// WAP to print the value from 1 to 10 using do.while loop

// for loop
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);
// }

// let i = 1;
// do {
//     console.log(i);
//     i = i+1;
// }while (i >= 10);

// WAP to find if the given number is prime or not

// let num = 13;
// let isPrime = true;
// for (let i = 2; i < num; i++) {
//   let remainder = num % 1;
//   if (remainder === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(`${num} is prime => ${isPrime}`);
