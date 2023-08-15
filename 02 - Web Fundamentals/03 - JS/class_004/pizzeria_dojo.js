function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
  return pizza = {
    tipoCorteza: tipoCorteza ,
    tipoSalsa: tipoSalsa,
    quesos: quesos,
    salsas: salsas
  };
}
// Create a pizza: "Chicago style", "traditional", ["mozzarella"] and ["pepperoni", "sausage"]
const pizza1 = pizzaOven("Chicago style", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

// Create a pizza: "hand thrown" , "marinara" , ["mozzarella", "feta"] and ["mushrooms", "olives", "onions"]
const pizza2 = pizzaOven("hand thrown" , "marinara" , ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

// Crea 2 pizzas more, as you like!
const pizza3 = pizzaOven("Chicago style" , "margherita" , ["mozzarella"], ["tomate"]);
console.log(pizza3);

const pizza4 = pizzaOven("hand thrown" , "napolitana" , ["mozzarella", "feta"], ["mushrooms", "jamon", "oregano", "olives", "onions"]);
console.log(pizza4);

