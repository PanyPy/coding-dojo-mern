function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
  return pizza = {
    tipoCorteza: tipoCorteza ,
    tipoSalsa: tipoSalsa,
    quesos: quesos,
    salsas: salsas
  };
}
// Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"]
const pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

// Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]
const pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

const pizza3 = pizzaOven("estilo Chicago" , "margherita" , ["mozzarella"], ["tomate"]);
console.log(pizza3);

const pizza4 = pizzaOven("lanzada a mano" , "napolitana" , ["mozzarella", "feta"], ["champiñones", "jamon", "oregano", "aceitunas", "cebollas"]);
console.log(pizza4);

// ¡Crea 2 pizzas más con los ingredientes que quieras!