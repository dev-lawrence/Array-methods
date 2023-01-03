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
const sortBtn = document.querySelector('[data-sort]');
const icon = document.querySelector('#icon');

// Functions
// function to load all the companies
const loadCompanies = () => {
  // create an unordered list
  let ul = document.createElement('ul');
  // give the unordered list a classname
  ul.className = 'list-items';

  // loop through the list of companies
  techCompanies.forEach((company) => {
    // create a list item
    let li = document.createElement('li');
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

// Sort items
let ascending = false;

const sortItems = () => {
  let sortedList;

  ascending = !ascending;

  if (ascending) {
    icon.innerHTML = '<i class="fa-solid fa-caret-down up"></i>';
    sortedList = techCompanies.sort();
  } else {
    sortedList = techCompanies.sort().reverse();
    icon.innerHTML = '<i class="fa-solid fa-caret-up up"></i>';
  }

  // display sorted list in the DOM
  let ul = `<ul class="list-items">`;

  sortedList.forEach((company) => {
    ul += `<li class="list-item">${company}</li>`;
  });

  ul += `</ul>`;
  output.innerHTML = ul;
};

// Event Listeners
window.addEventListener('DOMContentLoaded', loadCompanies);
sortBtn.addEventListener('click', sortItems);
