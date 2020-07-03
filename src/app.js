// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPatty();
  let isAvailable = addorDelactive(state.Patty, ".btn-patty");
  calculateCost(isAvailable, ingredients.Patty);
};

// Trial 2 - Setup event listener for the cheese button
let cheese = document.querySelector(".btn-cheese");
cheese.addEventListener("click", () => {
  state.Cheese = !state.Cheese;
  renderCheese();
  let isAvailable = addorDelactive(state.Cheese, ".btn-cheese");
  calculateCost(isAvailable, ingredients.Cheese);
});

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").addEventListener("click", () => {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoes();
  let isAvailable = addorDelactive(state.Tomatoes, ".btn-tomatoes");
  calculateCost(isAvailable, ingredients.Tomatoes);
});

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").addEventListener("click", () => {
  state.Onions = !state.Onions;
  renderOnions();
  let isAvailable = addorDelactive(state.Onions, ".btn-onions");
  calculateCost(isAvailable, ingredients.Onions);
});

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").addEventListener("click", () => {
  state.Lettuce = !state.Lettuce;
  renderLettuce();
  let isAvailable = addorDelactive(state.Lettuce, ".btn-lettuce");
  calculateCost(isAvailable, ingredients.Lettuce);
});

//Challenge 1 - Add/Remove the class active to the buttons based on state

addorDelactive = (ingrediant, target) => {
  var id = document.querySelector(target).textContent;
  if (ingrediant) {
    document.querySelector(target).classList.toggle("active");
    document.querySelector("#" + id).textContent = id;
  } else {
    document.querySelector(target).classList.toggle("active");
    document.querySelector("#" + id).textContent = "";
  }
  return ingrediant;
};
//Challenge 2 - Render only the items selected in the ingredients board based on the state
//covered in challenge 1;

//Judgement 1
//In the p element having price-details as the class, display the calculated

//price based on ingredients

calculateCost = (isAvailable, price) => {
  if (isAvailable === true) {
    totalPrice += price;
  } else if (isAvailable === false && totalPrice > 0) {
    totalPrice -= price;
  } else {
    totalPrice = 0;
  }
  document.querySelector(".price-details").textContent = totalPrice;
};
let totalPrice = 0;

init = () => {
  document.querySelector(".price-details").textContent = 0 + " INR";
  document.querySelector(".button").classList.remove("active")
  document.querySelector("#patty").style.display = "none";
  document.querySelector(".btn-cheese").classList.remove("active");
  document.querySelector("#cheese").style.display = "none";
  document.querySelector(".btn-tomatoes").classList.remove("active");
  document.querySelector("#tomato").style.display = "none";
  document.querySelector(".btn-onions").classList.remove("active");
  document.querySelector("#onion").style.display = "none";
  document.querySelector(".btn-lettuce").classList.remove("active");
  document.querySelector("#lettuce").style.display = "none";


};

init();