let pizzaPlace = "Cheezy Chaps Pizza";

let numberOfToppings = 7;

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `Welcome To ${pizzaPlace}, we have ${numberOfToppings} different toppings available to choose from!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
