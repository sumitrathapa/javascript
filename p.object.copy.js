// Object copy
// let x = 2;
// y = x;
// console.log(y);

const laptop1 = {
  name: "Mac book Pro",
  brand: "Apple",
  model: 2023,
  storage: {
    ram: 18,
    ssd: 512,
  },
};

// shallow copy
// copy by value,copy by reference

// const laptop2 = laptop1; //reference
// laptop2.name = "Asus TUF";
// laptop2.storage.ssd = 2000;
// console.log(laptop1);

// spread operator (...) // nested objectlae copy garda use huney

// const laptop2 = { ...laptop1 };
// laptop2.name = "Dell";
// laptop2.storage.ram = 16;
// console.log(laptop1);

// structuredClone (deep copy) // all copy  1st objectko kunai pani value 2ndma change nahuney
const laptop2 = structuredClone(laptop1);
laptop2.name = "A";
laptop2.storage.ssd = 55;
console.log(laptop1);
