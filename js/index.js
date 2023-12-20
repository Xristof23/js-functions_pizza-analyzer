console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  console.log(pizzaSize1);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  console.log(pizzaSize2);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});
// let pizzaSize1 = pizzaInput1.value;
// console.log("Pizzasize1: " + pizzaSize1);
// let pizzaSize2 = pizzaInput2.value;
// console.log("Pizzasize2: " + pizzaSize2);

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(pizzaSize1, pizzaSize2) {
  let area1 = Math.PI * (pizzaSize1 / 2) ** 2;
  let area2 = Math.PI * (pizzaSize2 / 2) ** 2;
  let pizzaGain = ((area2 - area1) / area1) * 100;
  console.log(area1);
  console.log(area2);
  console.log(area2 - area1);
  console.log(Math.round(pizzaGain) + " %");
  output.textContent = Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
