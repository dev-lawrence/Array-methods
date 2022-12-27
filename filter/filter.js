// grab the buttons and products from the dom
const buttons = document.querySelectorAll('.btn');
const products = document.querySelectorAll('.product');

// loop through the buttons
buttons.forEach((button) => {
  // add event listeners to the buttons
  button.addEventListener('click', (e) => {
    const active = document.querySelector('.active');

    // remove the active class from the button
    active.classList.remove('active');

    // add the active class to the button
    button.classList.add('active');

    // target the dataset named filter
    const filter = e.target.dataset.filter;

    // loop through each product
    products.forEach((product) => {
      // if filter has dataset of all
      if (filter == 'all') {
        product.style.display = 'block';
      } else {
        // if the classlist of a product contains any of the dataset
        if (product.classList.contains(filter)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      }
    });
  });
});

// Search filter for products
const search = document.querySelector('#filter-search');
const msg = document.querySelector('.error-msg');

// function to filter products
const filterProducts = () => {
  let filterValue = search.value.toUpperCase();

  const productNames = products;
  productNames.forEach((name) => {
    const itemName = name.getElementsByTagName('h3')[0];

    // if it matches
    if (itemName.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      name.style.display = '';
    }

    // does not match
    else {
      name.style.display = 'none';
    }
  });
};

// event listener to search
search.addEventListener('keyup', filterProducts);
