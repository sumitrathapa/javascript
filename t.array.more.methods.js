// find => return first matching item based on condition

// const scores = [2, 4, 7, 8, 9, 11, 23, 7];
// const newScores = scores.find((item, index, self) => {
//   if (item > 15) {
//     return item;
//   }
// });
// console.log(newScores);

// const students = ["Suresh", "Kamal", "Laxman"];
// const requiredStudent = students.find((item) => {
//   if (item === "Kamalesh") {
//   }
//   return item;
// });
// console.log(requiredStudent);

// const students = ["Suresh", "Kamal", "Laxman"];
// const newStudents = students.map((item) => {
//   if (item === "Kamal") {
//     return "Rajan";
//   } else {
//     return item;
//   }
// });
// console.log(newStudents);

// ?push,pop,map,filter,find
// ?push

// const nations = ["Nepal", "India", "China"];
// nations.push("Thiland");
// console.log(nations);

// ?pop

// nations.pop();
// console.log(nations);

// ? map => changes array content

// const prices = [100, 150, 177, 95,66];
// const newPrices = prices.map((item, index, self) => {
//   let newItem = item - 20;
//   return newItem;
// });
// console.log(newPrices);

// const prices = [100, 150, 177, 95, 66];

// const newPrices = prices.map((item) => {
//   if (item === 150) {
//     let newItem = item + 100;

//     return newItem;
//   } else {
//     return item;
//   }
// });
// console.log(newPrices);

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// const newData = studentData.map((item, index, self) => {
//   let newScores = item.score + 5;
//   let newItem = { ...item, score: newScores };
//   return newItem;
// });
// console.log(newData);

// ? filter
// ? scores greater than or equals to 32

// const markList = [25, 14, 17, 32, 37, 38, 45, 3, 7, 87, 33];
// const newMarkList = markList.filter((item, index, self) => {
//   if (item >= 32) {
//     return item;
//   }
// });
// console.log(newMarkList);

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// const newStudentData = studentData.filter((item, index, self) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(newStudentData);

// ?  sort => dictionary order

// const nameList = [
//   "Nepal",
//   "India",
//   "China",
//   "Bhutan",
//   "America",
//   "Zimbabwe",
//   "Australia",
//   "Argentina",
// ];
// nameList.sort();
// console.log(nameList);

// ? for numeric array
// a-b => ascending sort
// b-a => descending sort

// const nums = [1, 25, 100, 125, 22, 266, 277, 11111];
// nums.sort((a, b) => {
//   return b - a;
// });
// console.log(nums);

// nums.sort((a, b) => {
//   return a - b;
// });
// console.log(nums);

// array of words

// const words = ["Spray", "elite", "exuberant", "destruction"];

// const fName = "Rajeev"; // ["R","a","j","e","e","v"]
// console.log(fName.length);

// strings whose length is greater than 6

// const newWords = words.filter((item, index, self) => {
//   if (item.length > 6) {
//     return item;
//   }
// });
// const newWords = words.filter((item) => item.length > 6); //shortcut method
// console.log(newWords);

//  const country = "Nepal";
// ["N","e","p","a","l"]

// console.log(country[0]);

// country[0] = "I";
// console.log(country);

// const obj = {};

// Object.defineProperty(obj, "name", {
//   value: "Suresh",
//   enumerable: true, //show or hide
//   writable: true, //editable
//   configurable: true, //deletable
// });

// console.log(obj);

// ? reduce

// const scores = [45, 55, 65, 72];
// calculate total scores

// let sum = 0;
// scores.map((item) => {
//   sum = sum + item;
// });
// console.log(sum);

// Another method when reduce is used
// const totalValue = scores.reduce((sum, item, index, self) => {
//   sum = sum + item;
//   return item;
// }, 0);
// console.log(totalValue);

// let values = [10, 25, 35, 5];
// // calculate total value by multiplying each other
// const totalValue = values.reduce((product, item, index, self) => {
//   product = product * item;
//   return product;
// }, 1);
// console.log(totalValue);

// ? reverse
// ? reverse the order of array

// const countries = ["Nepal", "India", "China"];
// countries.reverse();
// console.log(countries);

// const marks = [25, 55, 10, 10];
// marks.reverse();
// console.log(marks);

// ? use case
const students = ["Suresh", "Rina", "Jibana", "Ansu", "Arun"];
// ascending order sort
// students.sort();

// descending order
students.sort().reverse();
console.log(students);
