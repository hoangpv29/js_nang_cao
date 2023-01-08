'ué strict';
const restaurant = {
    name:'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italia',
    categories: ['Italian', 'Pozzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu:['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [l, m, z] = arr;
console.log(l, m, z);
console.log(arr);


const [f, ,o ,s] = restaurant.categories;
console.log(f,o, s);

const[main, secondary] = restaurant.categories;
console.log(main,secondary);


const [starter, mainCorse] = restaurant.order(0,2);
console.log(starter,mainCorse);

const nested = [2,4,[6,8]];
// const [i, , j]= nested;
// console.log(i,j);
const [i, ,[j, k]]= nested;
console.log(i,j,k);

//Default values
const [q=1,p=1,r=1] = [8,9];
console.log(q,p,r);