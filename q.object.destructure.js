// destructure

// const laptop1 = {
//   name: "mac air",
//   brand: "apple",
//   ssd: "512",
//   variant: {
//     color1: "grey",
//     color2: "black",
//   },
// };

// console.log(laptop1.name); // structure
// console.log(laptop1.brand);

// destructure
// const {
//   name,
//   brand,
//   ssd,
//   variant: { color1, color2 },
// } = laptop1;
// console.log(name, brand, color1);

// console.log(color1, color2);

// let firstName = "sumi";
// const student1 = {
//   firstName: "Ansu",
//   lastName: "Thapa",
//   address: {
//     temporary: "A",
//     permanent: "B",
//   },
// };

// const {
//   firstName: fName, // renaming
//   address: { temporary: tempAdd }, //double destructure
// } = student1;
// console.log(tempAdd);

// ?
const person1 = {
  firstName: "Prithvi",
  lastName: "Prasain",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },

  //   method
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person1.fullName());
