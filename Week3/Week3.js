let pizzaToppings = ["Bacon", "sausage", "cheese", "pepperoni"];

function greetCustomer() {
  console.log("welcome to Pizza House! Our available toppings are:");
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (i === pizzaToppings.length - 1) {
      console.log("and" + pizzaToppings[i] + ".");
    } else {
      console.log(pizzaToppings[i] + ",");
    }
  }
}

function getPizzaOrder(size, toppings, ...crust) {
  let toppingsList = toppings.join(", ");
  console.log(
    `One ${size} ${crust} crust pizza with ${toppingsList} is on its way!`
  );
  return [size, crust, toppings];
}

function preparePizza(order) {
  console.log("...Making your pizza");
  let [size, crust, toppings] = order;
  return { size, crust, toppings };

  function servePizza(pizza) {
    let toppingsList = pizza.toppings.join (", ");
    console.log(`Order up! Here is your ${pizza.size} ${pizza.crust} crust pizza with ${toppingsList} . Enjoy!`);
    return pizza;
  }

greetCustomer();
let order = getPizzaOrder("large", "thick", "pepperoni", "bacon", "mushrooms");
let preparePizza = preparePizza(order);
servePizza(preparePizza);
