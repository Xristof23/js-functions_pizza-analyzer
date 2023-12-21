console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

window.addEventListener("load", () => {
  outputSection.style.backgroundColor = "lightgray";
});

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  // console.log(pizzaSize1);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay1(pizzaSize1);
  // document.outputSection.style.backgroundColor = "red";
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  // console.log(pizzaSize2);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay2(pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// define the function calculatePizzaGain here
function calculatePizzaGain(pizzaSize1, pizzaSize2) {
  let area1 = Math.PI * (pizzaSize1 / 2) ** 2;
  let area2 = Math.PI * (pizzaSize2 / 2) ** 2;
  let pizzaGain = ((area2 - area1) / area1) * 100;
  console.log(Math.round(pizzaGain) + " %");
  output.textContent = Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay1(pizzaSize1) {
  pizza1.style.width = (pizzaSize1 / 24) * 100 + "px";
}
function updatePizzaDisplay2(pizzaSize2) {
  console.log((pizzaSize2 / 24) * 100);
  pizza2.style.width = (pizzaSize2 / 24) * 100 + "px";
}
//
// Task 3
// define the function updateOutputColor here
function updateOutputColor(pizzaSize1, pizzaSize2) {
  if (pizzaSize1 > pizzaSize2) {
    outputSection.style.backgroundColor = "var(--red)";
    console.log("red");
  } else if (pizzaSize1 === pizzaSize2) {
    outputSection.style.backgroundColor = "lightgray";
    console.log("green");
  } else {
    outputSection.style.backgroundColor = "var(--green)";
    console.log("green");
  }
}
