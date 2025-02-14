// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  //console.table(state);
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushrrom) => {
    if (state.mushrooms) {
      oneMushrrom.style.visibility = 'visible';
    } else {
      oneMushrrom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  })

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceNode = document.getElementsByClassName('sauce')[0];
  if (state.whiteSauce && !sauceNode.classList.contains('sauce-white')) {
    sauceNode.classList.add('sauce-white');
  }
  if (!state.whiteSauce && sauceNode.classList.contains('sauce-white')) {
    sauceNode.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustNode = document.getElementsByClassName('crust')[0];
  if (state.glutenFreeCrust && !crustNode.classList.contains('crust-gluten-free')) {
    crustNode.classList.add('crust-gluten-free');
  }
  if (!state.glutenFreeCrust && crustNode.classList.contains('crust-gluten-free')) {
    crustNode.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.getElementsByClassName('btn');
  let counter = 0;
  for (let property in state) {
    if (state[property] && !buttons[counter].classList.contains('active')) {
      buttons[counter].classList.add('active');
    } 
    if (!state[property] && buttons[counter].classList.contains('active')) {
      buttons[counter].classList.remove('active');
    }
    counter++;
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const addedIngredients = document.querySelectorAll('aside > ul > li');
  const totalPriceNode = document.querySelectorAll('aside > strong')[0];
  let totalPrice = 10;
  let counter = 0;
  for (let property in state) {
    if (state[property]) {
      addedIngredients[counter].style.visibility = 'visible';
      if (property === 'whiteSauce') {
        totalPrice += 3;
      } else if (property === 'glutenFreeCrust') {
        totalPrice += 5;
      } else {
        totalPrice += 1;
      }
    } else {
      addedIngredients[counter].style.visibility = 'hidden';
    }
    counter++;
  }
  totalPriceNode.innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
} )
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})