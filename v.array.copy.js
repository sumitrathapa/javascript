// ******Array copy*****

// const scores = [25, 35, 45, 55];
//  address copy
// const newScores = scores;

// newScores[0] = 6;

// console.log(scores);

// ? spread operator

// const scores = [25, 35, 45, 35];
// let newScores = [...scores];
// newScores[0] = 5;
// console.log(scores);

// ? structuredClone
// When array has objects or array inside
const studentData = [{ name: "A" }, { name: "B" }];
const newStudentData = structuredClone(studentData);
// newStudentData[0].name = "z";
console.log(studentData);
