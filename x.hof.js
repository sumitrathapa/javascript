// /? hof => higher order function

// 1. function returning function
// 2. function which accepts another function as argument

// ?case for number 2
// const numbers = [1, 5, 7, 8];

// map, filter,reduce,find
// numbers.map((item, index, self) => {
//   console.log(item);
// });

// ?callback function=> function which is passed as an argument to another function
// const getSum = (x, y, printValue) => {
//   const sum = x + y;

//   printValue(sum);
// };

// const printValue = (value) => {
//   console.log(value);
// };

// getSum(2, 3, printValue);

// ?case for number 1

// const getSum = (x, y) => {
//   const calculateSum = () => {
//     let sum = x + y;

//     return sum;
//   };

//   return calculateSum;
// };

// const func = getSum(2, 3);

// const result = func();

// const result = getSum(10, 20)();

// console.log(result);

// closure => function with its lexical environment
const getProduct = (num1) => {
  const doMultiply = (num2) => {
    let product = num1 * num2;

    return product;
  };

  return doMultiply;
};

const doMultiply = getProduct(5);

// const product = doMultiply(10);

// console.log(product);

// const product = doMultiply(7);

// console.log(product);

const doMultiplyBy4 = getProduct(4);
