/* SOMETHINGS TO NOTE ABOUT THE REDUCE METHOD
1. reduce method takes an array of values, iterates through them and reduces it down to one
single value


2.whatever you return from the the reduce function will be the value for total one the next iteration
and when there is nothing to loop through 
whatever you return from your last iteration is going to your variable that you set for reduce function

*/

// const ages = [2, 10, 12, 4, 6];

// const totalAge = ages.reduce((total, age) => {
//   console.log(`Total: ${total}`);
//   console.log(`Age: ${age}`);
//   return total + age;
// }, 0);

// console.log(totalAge);

// const items = [
//   { name: 'rice', price: 300 },
//   { name: 'beans', price: 400 },
//   { name: 'plantain', price: 100 },
//   { name: 'yam', price: 40 },
//   { name: 'beef', price: 100 },
// ];

// const totalPrice = items.reduce((total, item) => {
//   // deep dive on what is going on the reduce array method
//   console.log(`Total: ${total}`);
//   console.log(`Item: ${item.price}`);

//   return total + item.price;
// }, 0);

// const students = [
//   { name: 'lawrence', age: 32 },
//   { name: 'james', age: 22 },
//   { name: 'loveth', age: 16 },
//   { name: 'james', age: 42 },
// ];

// const result = students.reduce((groupedStudents, person) => {
//   const name = person.name;
//   if (groupedStudents[name] == null) {
//     groupedStudents[name] = [];
//   }

//   groupedStudents[name].push(person);
//   return groupedStudents;
// }, {});

// console.log(result);

// group people according to their age
// const result = students.reduce((groupedPeople, person) => {
//   const age = person.age;
//   if (groupedPeople[age] == null) {
//     groupedPeople[age] = [];
//   }

//   groupedPeople[age].push(person);

//   return groupedPeople;
// }, {});

// console.log(result);
// const result = [
//   { name: 'James', score: 41 },
//   { name: 'Mattew', score: 59 },
//   { name: 'Judith', score: 36 },
//   { name: 'John', score: 90 },
//   { name: 'Mark', score: 64 },
// ];

// let initialValue = {
//   pass: [],
//   fail: [],
// };

// const groupedResult = result.reduce((total, cummulative) => {
//   const mark = cummulative.score;
//   if (mark >= 50) {
//     total.pass.push(cummulative);
//   } else {
//     total.fail.push(cummulative);
//   }

//   return total;
// }, initialValue);

// console.log(groupedResult);
