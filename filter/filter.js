const buttons = document.querySelectorAll('.btn');
const products = document.querySelectorAll('.product');
const watches = document.querySelectorAll('.watch');
const speakers = document.querySelectorAll('.speaker');
const cameras = document.querySelectorAll('.camera');

const product1 = document.querySelector('.one');
const product2 = document.querySelector('.two');
const product3 = document.querySelector('.three');
const product4 = document.querySelector('.four');
const product5 = document.querySelector('.five');
const product6 = document.querySelector('.six');
const product7 = document.querySelector('.seven');
const product8 = document.querySelector('.eight');
const product9 = document.querySelector('.nine');
const product10 = document.querySelector('.ten');
const product11 = document.querySelector('.eleven');
const product12 = document.querySelector('.twelve');
const product13 = document.querySelector('.thirteen');
const product14 = document.querySelector('.fourteen');
const product15 = document.querySelector('.fifteen');

// const hideProduct = () => {
//   watches.forEach((watch) => {
//     watch.classList.add('hide');
//   });

//   speakers.forEach((speaker) => {
//     speaker.classList.add('hide');
//   });
// };

// const showProduct = () => {
//   watches.forEach((watch) => {
//     watch.classList.add('show');
//   });

//   speakers.forEach((speaker) => {
//     speaker.classList.add('show');
//   });
// };

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    button.classList.add('active');

    const filter = e.target.dataset.filter;

    // products.forEach((product) => {
    if (filter == 'all') {
      // showProduct();

      product1.style.opacity = '1';
      product2.style.opacity = '1';
      product3.style.opacity = '1';
      product4.style.opacity = '1';
      product5.style.opacity = '1';
      product6.style.opacity = '1';
      product7.style.opacity = '1';
      product8.style.opacity = '1';
      product9.style.opacity = '1';
      product10.style.opacity = '1';
      product11.style.opacity = '1';
      product12.style.opacity = '1';
      product13.style.opacity = '1';
      product14.style.opacity = '1';
      product15.style.opacity = '1';
      product1.style.transform = 'scale(1)';
      product2.style.transform = 'scale(1)';
      product3.style.transform = 'scale(1)';
      product5.style.transform = 'scale(1)';
      product6.style.transform = 'scale(1)';
      product7.style.transform = 'scale(1)';
      product8.style.transform = 'scale(1)';
      product9.style.transform = 'scale(1)';
      product11.style.transform = 'scale(1)';
      product13.style.transform = 'scale(1)';
      product14.style.transform = 'scale(1)';
      product15.style.transform = 'scale(1)';

      product4.style.transform = 'scale(1)';
      product7.style.transform = 'scale(1)';
      product10.style.transform = 'scale(1)';
      product12.style.transform = 'scale(1)';
    } else if (filter == 'camera') {
      // hideProduct();
      product2.style.opacity = '0';
      product2.style.transform = 'scale(0)';
      product3.style.opacity = '0';
      product3.style.transform = 'scale(0)';
      product5.style.opacity = '0';
      product5.style.transform = 'scale(0)';
      product6.style.opacity = '0';
      product6.style.transform = 'scale(0)';
      product8.style.opacity = '0';
      product8.style.transform = 'scale(0)';
      product9.style.opacity = '0';
      product9.style.transform = 'scale(0)';
      product11.style.opacity = '0';
      product11.style.transform = 'scale(0)';
      product13.style.opacity = '0';
      product13.style.transform = 'scale(0)';
      product14.style.opacity = '0';
      product14.style.transform = 'scale(0)';
      product15.style.opacity = '0';
      product15.style.transform = 'scale(0)';

      product1.style.opacity = '1';
      product1.style.transform = 'scale(1)';
      product4.style.opacity = '1';
      product4.style.transform = 'translateX(-550px)';
      product7.style.transform = 'translate(25px, -372px)';
      product7.style.opacity = '1';
      product10.style.transform = 'translate(600px, -740px)';
      product10.style.opacity = '1';
      product12.style.transform = 'translate(-850px, -350px)';
      product12.style.opacity = '1';

      // hideProduct();
    } else if (filter == 'speaker') {
      product1.style.opacity = '0';
      product1.style.transform = 'scale(0)';
      product2.style.opacity = '0';
      product2.style.transform = 'scale(0)';
      product4.style.opacity = '0';
      product4.style.transform = 'scale(0)';
      product5.style.opacity = '0';
      product5.style.transform = 'scale(0)';
      product7.style.opacity = '0';
      product7.style.transform = 'scale(0)';
      product8.style.opacity = '0';
      product8.style.transform = 'scale(0)';
      product10.style.opacity = '0';
      product10.style.transform = 'scale(0)';
      product11.style.opacity = '0';
      product11.style.transform = 'scale(0)';
      product12.style.opacity = '0';
      product12.style.transform = 'scale(0)';
      product14.style.opacity = '0';
      product14.style.transform = 'scale(0)';

      product3.style.transform = 'translateX(-560px)';
      product3.style.opacity = '1';
      product6.style.transform = 'translate(5px, -370px)';
      product6.style.opacity = '1';
      product9.style.transform = 'translate(570px, -740px)';
      product9.style.opacity = '1';
      product13.style.transform = 'translate(850px, -1110px)';
      product13.style.opacity = '1';
      product15.style.transform = 'translate(-560px, -730px)';
      product15.style.opacity = '1';
    } else if (filter == 'watch') {
      product1.style.opacity = '0';
      product1.style.transform = 'scale(0)';
      product3.style.opacity = '0';
      product3.style.transform = 'scale(0)';
      product4.style.opacity = '0';
      product4.style.transform = 'scale(0)';
      product6.style.opacity = '0';
      product6.style.transform = 'scale(0)';
      product7.style.opacity = '0';
      product7.style.transform = 'scale(0)';
      product9.style.opacity = '0';
      product9.style.transform = 'scale(0)';
      product10.style.opacity = '0';
      product10.style.transform = 'scale(0)';
      product12.style.opacity = '0';
      product12.style.transform = 'scale(0)';
      product13.style.opacity = '0';
      product13.style.transform = 'scale(0)';
      product15.style.opacity = '0';
      product15.style.transform = 'scale(0)';

      product2.style.transform = 'translateX(-280px)';
      product2.style.opacity = '1';
      product5.style.transform = 'translate(280px, -370px)';
      product5.style.opacity = '1';
      product8.style.transform = 'translate(-280px, -370px)';
      product8.style.opacity = '1';
      product11.style.transform = 'translate(280px, -740px)';
      product11.style.opacity = '1';
      product14.style.transform = 'translate(-280px, -730px)';
      product14.style.opacity = '1';
    }
  });
});

// Search filter for products
const search = document.querySelector('.search');

search.addEventListener('keyup', (e) => {
  e.preventDefault();
  const searchValue = search.value.toLowerCase().trim();

  products.forEach((product) => {
    if (product.classList.contains(searchValue)) {
      product.style.display = 'block';
    } else if (searchValue == '') {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

// const gadgets = [
//   { name: 'Iphone', price: 2000, location: 'Delta' },

//   { name: 'Samsung Galaxy', price: 3000, location: 'Lagos' },

//   { name: 'Iphone', price: 2000, location: 'Delta' },

//   { name: 'Iphone', price: 2000, location: 'Lagos' },

//   { name: 'Infinix', price: 2000, location: 'Delta' },

//   { name: 'Samsung Galaxy', price: 3000, location: 'Delta' },

//   { name: 'Sony', price: 2000, location: 'Ibandan' },
// ];

// const filterName = (gadget, search) => {
//   return gadget.filter((letter) => letter.name.includes(search));
// };

// console.log(filterName(gadgets, 'ny'));

// const fruits = ['Apple', 'Banana', 'grapes', 'mango', 'orange'];

// const filterItems = (fruit, search) => {
//   return fruit.filter((letter) => letter.includes(search.toLowerCase()));
// };

// console.log(filterItems(fruits, 'pes'));
// console.log(filterItems(fruits, 'an'));

// const clothing = ['Shoes', 'Shit', 'Glasses', 'Trousers', 'Trainers'];

// const filterClothing = (cloth) => {
//   if (cloth == 'sh') {
//     return true;
//   }
// };

// const filteredClothes = clothing.filter(filterClothing);

// console.log(filteredClothes);

// const gadgetLocation = gadgets.filter((gadget, index) => {
//   if (gadget.location == 'Delta') {
//     return true;
//   }

// });

// const gadgetLocation = gadgets.filter(gadget=>(gadget.location == 'Delta'))

// const ages = [22, 10, 34, 39, 21, 4, 3];
// const above20 = ages.filter((age) => age >= 20);

// const newItem = document.createElement('li');
// newItem.innerText = above20;
// newItem.className = 'item';
// document.querySelector('body').append(newItem);

// console.log(above20);
