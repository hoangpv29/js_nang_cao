const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italia",
  categories: ["Italian", "Pozzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 DOI TUONG NANG CAO
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...orderIngredient) {
    console.log(mainIngredient);
    console.log(orderIngredient);
  },
};

const ordersSet = new Set([
  "Pizza",
  "Pasta",
  "Risotto",
  "Pasta",
  "Pasta",
  "Risotto",
]);

console.log(ordersSet);

console.log(new Set("Pizza"));

console.log(ordersSet.size);

console.log(ordersSet.has("Pasta"));
console.log(ordersSet.has("Pa"));

ordersSet.add("banh my");
ordersSet.delete("Pizza");
console.log(ordersSet);

//Example

const staff = ["Pizza", "Pasta", "Risotto", "Pasta", "Pasta", "Risotto"];
const staffUnique = [...staff];

console.log(
  new Set(["Pizza", "Pasta", "Risotto", "Pasta", "Pasta", "Risotto"]).size
);
console.log(
  new Set('qjwhjqhwkehhkq').size
);