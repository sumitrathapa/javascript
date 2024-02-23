// object = key value pair

// primitives data types
// 1.string
// 2.boolean
// 3.number
// 4.undefind
// 5.null

// non-primitive
// object => key value pair
// key is also called property
// grouping of primitives data types

let student = {
  firstName: "Sumitra",
  lastName: "Thapa",
  college: "Sahara",
  age: "22",
  permanentAddress: "Surkhet",
  TemporaryAddress: "Kathmandu",
  isMarried: false,
  isGraduated: null,
  height: undefined,
};
// console.log(student);
// console.log(typeof student); //object

//    symbols in js

// " " => double quote
// ''  => single quote
// `` => back tick
// ; => semi colon
// : => colon
//  , => comma
//  / => slash (forward slash)
// \ => back slash
// || => pipe
// && => ampersand

// ? CRUD
// C => Create/ Add
// R => Read/ Retrieve
// U => Update/Edit
// D => Delete/Remove

//  read operations
// dot operator and square operator are used in read operations
// console.log(student.college);
// console.log(student["height"]);
// console.log(student["age"]);

// delete operation => removes specified property

// delete student.firstName;
// delete student["firstName"];
// console.log(student);

// const countryDetails = {
//   name: "nepal",
//   population: "3cr",
//   states: 7,
//   districts: 77,
//   name: "Nepal",
//   localAdministration: 753,
//   isRepulic: true,
//   isSecular: true,
//   famousPlace: "Lumbini",
// };
// upsert => update or insert
// ? update operation

// countryDetails.name = "India";
// countryDetails["states"] = 28;
// console.log(countryDetails);

// ? add
// countryDetails.gdp = "2 million";
// console.log(countryDetails);

// ? read
// console.log(countryDetails["isRepulic"]);
// console.log(countryDetails.name);

//  ? delete
// delete countryDetails["isSecular"];
// console.log(countryDetails);

const laptopDetails = {
  name: "GF75",
  brand: "MSI",
  ram: 16,
  ssd: 512,
  display: "15.3",
  graphics: "NVIDIA FeForce RTX 3060",
  battery: "51 Whr",
  processor: "i7 10750H",
};

// ? display laptop name with battery capacity // GF75 has 51Whr battery.

// console.log(`${laptopDetails.name} has ${laptopDetails.battery} battery`);

// ?change ram size to 18 gigs

// laptopDetails.ram = "18gigs";
// console.log(laptopDetails);

// ?add another property called  memoryFrequency with 3200MHz value

// laptopDetails.memoryFrequency = "3200MHz";
// console.log(laptopDetails);

// ? add another property called weight whose value is 3kg

// laptopDetails.weight = "3kg";
// console.log(laptopDetails);

// ? update ssd size by 300 GB

// laptopDetails.ssd = laptopDetails.ssd + 300;
// laptopDetails.ssd += 300;
// console.log(laptopDetails);

// Delete processor property

// delete laptopDetails.processor;
// console.log(laptopDetails);

// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// const myHouseDetails = {
//   numbersOfRooms: 20,
//   numberOfMembers: 7,
//   colorOfHouse: "green",
//   builtYear: 2011,
//   numberOfStorey: 3,
//   numberOfPeople: 10,
//   estimatedBudget: "2 crores",
// };
// console.log(myHouseDetails);
// A.Delete numberOfMembers property

// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

// B.Update numberOfRooms by new value

// myHouseDetails["numbersOfRooms"] = 9;
// console.log(myHouseDetails);

//  C.Add a  new property called estimatedPriceOfHouse

// myHouseDetails.estimatedPriceOfHouse = "5 crores";
// console.log(myHouseDetails);

// D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores".

// console.log(
//   `"I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numbersOfRooms} rooms where ${myHouseDetails.numberOfPeople} people are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedBudget} ."`
// );

// Assignment no 4.Create an object named myFavoutireFood and add any three properties on it.    Create another object by copying this object.

// const myFavouriteFood = {
//   name: "pizza",
//   cuisine: "Italian",
//   spicy: false,
// };

//Assignment no  5. hospital Details
// add field => name,location,patientCapacity, numberOfBed, numberOfBlock,
// numberOfDoctor,numberOfNurse

// const hospitalDetails = {
//   name: "civilHospital",
//   location: "kathmandu",
//   patientCapacity: 200,
//   numberOfBed: 202,
//   numberOfBlock: 8,
//   numberOfDoctor: 5,
//   numberOfNurse: 15,
// };

// delete numberOfBed and numberOfNurse

// delete hospitalDetails.numberOfBed;
// delete hospitalDetails.numberOfNurse;
// console.log(hospitalDetails);

// update numberOfBlock

// hospitalDetails.numberOfBlock = 6;
// console.log(hospitalDetails);

// add new field named numberOfAmbulance

// hospitalDetails["numberOfAmbulance"] = 4;
// console.log(hospitalDetails);

// copy the object to new variable named newHospitalDetails

// print out results like "There is a hospital named ABC with...."

// console.log(`"There is a hospital name ${hospitalDetails.name} with...."`);

// nested object

// const studentDetails = {
//   firstName: "Ansu",
//   lastName: "Thapa",
//   age: 21,
//   college: "Tribhuvan University",
//   address: {
//     temporary: "dailekh",
//     permanent: "kathmndu",
//   },
// };
// different method to print output

// console.log(studentDetails.address.temporary);
// console.log(studentDetails["address"]["temporary"]);

// console.log(studentDetails["address"].temporary);
// console.log(studentDetails.address["temporary"]);

// studentDetails.address.permanent = "india";
// studentDetails["address"]["permanent"] = "kansas";
// console.log(studentDetails);
