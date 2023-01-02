// Array of companies
const techCompanies = [
  'Google',
  'Whatsapp',
  'Facebook',
  'Instagram',
  'Snapchat',
  'Twitter',
];

// Get element from the Dom
const output = document.querySelector('#output');

// Functions
// function to load all the companies
// const loadCompanies = () => {
//   let temp = `<ul class="list-items">`;

//   techCompanies.forEach((company) => {
//     temp += `<li class="list-item">${company}</li>`;
//   });

//   temp += `</ul>`;

//   output.innerHTML = temp;
// };

// const loadCompanies = () => {
//   let ul = document.createElement('ul');
//   ul.className = 'list-items';

//   techCompanies.forEach((company) => {
//     const li = document.createElement('li');
//     li.className = 'list-item';
//     li.textContent = company;
//     console.log(li);
//   });
// };

// Event Listeners
// window.addEventListener('DOMContentLoaded', loadCompanies);

// const numbers = [1, 10, 5, 16, 74, 39, 203];

// const comparedNumbers = numbers.sort((a, b) => {
//   return a - b;
// });

// const names = ['Lawrence', 'James', 'Morgan'];

// console.log(comparedNumbers);

// const companies = [
//   { name: 'Google', start: 2010 },
//   { name: 'Facebook', start: 2009 },
//   { name: 'Instagram', start: 2022 },
//   { name: 'Netflix', start: 2000 },
//   { name: 'ChatGpt', start: 1999 },
// ];

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);
