// console.log("Hi");
// const x = 5;

// try {
//   x = 7;
// } catch (error) {
//   console.log(error.message);
// }

// let firstName = "Rohan";
// console.log(`My friends name is ${firstName}`);

// console.log("I am from Nepal");

// const loadPosts = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// loadPosts();

const fetchProducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchProducts();
