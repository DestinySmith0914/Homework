let pizzaToppings = ["Bacon", "sausage", "cheese", "pepperoni"];

function greetCustomer() {
  let message = "Welcome to pizza house, our toppings are:";

  for (let topping of pizzaToppings) {
    message += `${topping}, `;
  }
  console.log(message);
}

greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  order += "...coming up!";
  console.log(order);
  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("...Making your pizza");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizza) {
  let message = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;

  for (let topping of pizza.toppings) {
    message += `${topping}, `;
  }
  message += "...Enjoy!";

  console.log(message);
  return pizza;
}

servePizza(preparePizza(getPizzaOrder("large", "thick", "bacon", "sausage")));
