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
  [`day-${2 + 4}`]: {
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

const rest = new Map();
rest.set('name','abc');
rest.set(1,'hahah');
console.log(rest.set(2,'liscbo'));

rest
  .set('one',["Via Angelo Tavanti 23, Firenze, Italia"])
  .set('open',11)
  .set('close',23)
  .set(true,'we aa')
  .set(false,'we cl');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time =21;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

console.log(rest.has('one'));
rest.delete(1);
console.log(rest);


const arr = [1,2];
rest.set(arr,"test");
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

