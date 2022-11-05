// Array of objects
const gadgets = [
  {
    name: 'Bluetooth Speaker',
    price: 30500,
  },

  {
    name: 'Camera',
    price: 40500,
  },

  {
    name: 'Power Bank',
    price: 50500,
  },

  {
    name: 'Wrist Watch',
    price: 60500,
  },
];

// Store the elements inside variables
const gadgetName = document.querySelectorAll('.name');
const gadgetPrice = document.querySelectorAll('.price');
const button = document.querySelector('button');

// using the forEach Method to display the name of each gadget
gadgetName.forEach((name, index) => {
  // function to map out the name of each gadget
  const displayGadgetName = gadgets.map((product) => {
    return {
      ...product, //used the speard operator here
      name: product.name,
    };
  });

  // store the gadget names in a new variable
  const currentName = displayGadgetName[index].name;

  // show the gadget names in the DOM
  name.textContent = currentName;
});

// function to  display the current price of the product
const currentGadgetPrice = () => {
  gadgetPrice.forEach((price, index) => {
    const discountedProducts = gadgets.map((product) => {
      return {
        ...product,
        price: product.price.toLocaleString(), // the toLocaleString method is just adding a comma after the first two digits
      };
    });

    // store the gadget price in a new variable
    const currentPrice = discountedProducts[index].price;
    // show the gadget names in the DOM
    price.textContent = `₦ ${currentPrice}`;
  });
};

// display current gadgets price
currentGadgetPrice();

// function to display the discount price of each product
const getDiscount = () => {
  const discountedProducts = gadgets.map((product) => {
    //  store the discount price in a new array
    const discountedPrice = product.price - (product.price * 30) / 100;
    return {
      ...product,
      price: discountedPrice.toLocaleString(),
    };
  });

  // using the forEach Method to display the discount price of each gadget in the DOM
  gadgetPrice.forEach((price, index) => {
    const discountPrice = discountedProducts[index].price;
    price.textContent = `₦ ${discountPrice}`;
  });
};

// event listener
button.addEventListener('click', () => {
  // show discount
  getDiscount();
  button.style.display = 'none';

  const newButton = document.createElement('button');
  newButton.textContent = 'See current price';
  document.querySelector('.button').appendChild(newButton);

  //  listener for the new button that is created
  newButton.addEventListener('click', () => {
    button.style.display = 'inline-flex';
    newButton.style.display = 'none';

    // display the current gadget price when the new button is clicked
    currentGadgetPrice();
  });
});
