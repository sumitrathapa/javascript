// Array => object data type
// c program => colection of same data type
// js => collection of any data type

// const studentList = ["prithvi", "Ansu", "Rekha"];
// console.log(typeof studentList);

// js supports array of mixed datatypes
// const randomArray = [1, "sita", true, undefined];
// console.log(randomArray);

// const scoreList = [45, 46, 47, 48];
// We can access value in array using index
// index always start from zero.

// console.log(scoreList[0]);
// console.log(scoreList[3]);

// array length => total number of items in array
// console.log(scoreList.length);

// const carBands = ["honda", "Toyota", "Tesla", "BYD", "Tata"];
// for (let i = 0; i <= carBands.length - 1; i++) {
//   console.log(carBands[i]);
// }

// ********array methods********

//?   1) push => adds element to end of array

// let studentList = ["prithvi", "bikash"];
// studentList.push("Arun");
// studentList.push("ansu", "sumi");
// console.log(studentList);

//? 2)  pop => remove last item from array
// studentList.pop();
// console.log(studentList);

// 3) unshift => adds item to start of array

// let studentList = ["Prithvi", "Bikash"];
// studentList.unshift("Manish");
// console.log(studentList);

// 4 ) shift => removes item from start to array

// let studentList = ["prithvi", "bikash"];
// studentList.shift();
// console.log(studentList);

// 5 ) map
// It is used to change items and return new array.
// Original array and returned array has same length/size.
// const scores = [25, 35, 45, 55, 65, 75];
// scores.map((item, index, self) => {
//   console.log(item, index, self);
// });

// const marks = [5, 6, 7, 8];
// marks.map((item, index, self) => {
//   console.log(item, index, self);
// });

// const scores = [25, 35, 45, 55, 65, 75];
// const newScores = scores.map((item, index, self) => {
//   let newScores = item - 10;
//   return newScores;
// });
// console.log(newScores);

// const marks = [25, 35, 45, 55, 65, 75];
// const newMarks = marks.map((item, index, self) => {
//   let newMarks = item - 20;
//   return newMarks;
// });
// console.log(newMarks);

// const nameList = ["Ansu", "Rekha", "Gita"];
// let newNameList = nameList.map((item, index, self) => {
//   let newItem = item.toLowerCase();
//   return newItem;
// });
// console.log(newNameList);

// const nameList = ["Ansu", "Rekha", "Gita"];
// let newNameList = nameList.map((item, index, self) => {
//   if (item === "Rekha") {
//     return item;
//   }
//   let newItem = item.toLowerCase();
//   return newItem;
// });
// console.log(newNameList);

// *****Assignment****

// 1) Create an array called friendsList and add your friends name. Print out your friend's name one by one.

// let friendsList = ["anju", "Nila", "Jasmin", "Sumi"];
// friendsList.map((item, index, self) => {
//   console.log(item);
// });

// 2) Create an array called favourite sportsPerson and use a for loop to print the player's name.

// const sportsPersonsList = ["Ronaldo", "Messi", "LeBrron James" ,"Virat","Paras"];
// sportsPersonsList.forEach((item, index, self) => {
//   console.log(item);
// });

// 3) Create an array called myFavourite actors and print out who is your best actor among all actors.

// const actorList = ["Aamir Khan", "Shah Rukh Khan", "Rajesh Hamal"];
// actorList.forEach((item, index, self) => {
//   if (item === "Rajesh Hamal") {
//     console.log(`${item} is my fav actor`);
//   }
// });

// 4) Make an array of numbers that double the items.

// let originalArray = [5, 10, 15, 20];
// let doubleArray = originalArray.map((item) => {
//   let doubleArray = item * 2;
//   return doubleArray;
// });
// console.log(doubleArray);

// Make an array of numbers and print whether the numbers are odd or even.

// const checkOddOrEven = (num) => {
//   let remainder = num % 2;
//   let result;
//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return result;
// };
// const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// numbers.forEach((item, index, self) => {
//   const result = checkOddOrEven(item);
//   console.log(`${item} is ${result}`);
// });

// ? ******Filter*****

// filter => filter out values from array based upon condition
// original array and
// returned array has max probability of having different size

// const numList = [20, -34, 40, -46, 26, 57, -7];
// const newNumList = numList.filter((item, index, self) => {
//   return item < 0;
//   // return item >0;
// });
// console.log(newNumList);

//? get an array with even scores

// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];
// const newScoreList = scoreList.filter((item, index, self) => {
//   let remainder = item % 2;
//   if (remainder === 0) {
//     return item;
//   }
// });
// console.log(newScoreList);

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// 1 ? due to sudden rise in tax, add 10% to the price of each laptop

// const newlaptopList = laptopList.map((item, index, self) => {
//   item.price = item.price + (10 / 100) * item.price;
//   return item;
// });
// console.log(newlaptopList);

// Another method

// const newlaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price + 0.1 * item.price;
//   let newItem = {
//     ...item,
//     price: newPrice, //replaces price with newPrice
//   };
//   return newItem;
// });
// console.log(newlaptopList);

// 2 ? decrease price of each laptop by 20 percent

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price - (20 / 100) * item.price;
//   let newItem = { ...item, price: newPrice };
//   return newItem;
// });
// console.log(newLaptopList);

// 3 ? remove laptops whose price is greater than 1000

// const newlaptopList = laptopList.filter((item, index, self) => {
//   if (item.price <= 1000) {
//     return item;
//   }
// });
// console.log(newlaptopList);

// 4 remove laptops whose brand is apple

// const newlaptopList = laptopList.filter((item, index, self) => {
//   if (item.brand !== "apple") {
//     return item;
//   }
// });
// console.log(newlaptopList);

// Another shortcut method

// const newLaptopList = laptopList.filter((item) => item.brand !== "apple");
// console.log(newLaptopList);

// 5 increase price of asus laptop by 5%

const newLaptopList = laptopList.map((item, index, self) => {
  if (item.brand === "asus") {
    let newprice = item.price + (5 / 100) * item.price;
    let newItem = { ...item, price: newprice };
    return newItem;
  } else {
    return item;
  }
});
console.log(newLaptopList);
