// const numbers = [1, 10, 5, 16, 74, 39, 203];

// const comparedNumbers = numbers.sort((a, b) => {
//   return b - a;
// });

const names = ['Lawrence', 'James', 'Morgan'];
names.join();

console.log(names);

// console.log(comparedNumbers);

const companies = [
  { name: 'Google', start: 2010 },
  { name: 'Facebook', start: 2009 },
  { name: 'Instagram', start: 2022 },
  { name: 'Netflix', start: 2000 },
  { name: 'ChatGpt', start: 1999 },
];

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);
