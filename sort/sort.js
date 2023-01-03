// Array of companies
const techCompanies = [
  'Google',
  'Whatsapp',
  'Facebook',
  'Instagram',
  'Snapchat',
  'Twitter',
  'Airbnb',
];

// Get element from the Dom
const output = document.querySelector('#output');

// Functions
// function to load all the companies
const loadCompanies = () => {
  // create an unordered list
  const ul = document.createElement('ul');
  // give the unordered list a classname
  ul.className = 'list-items';

  // loop through the list of companies
  techCompanies.forEach((company) => {
    // create a list item
    const li = document.createElement('li');
    // give the list a classname
    li.className = 'list-item';
    // put each item in the list
    li.textContent = company;

    // append the list item to the unordered list
    ul.appendChild(li);
  });

  // append the unordered list item to the ouput
  output.append(ul);
};

// Event Listeners
window.addEventListener('DOMContentLoaded', loadCompanies);

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
