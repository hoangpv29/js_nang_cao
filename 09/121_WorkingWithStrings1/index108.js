
const weekdays = ['mon', 'tue', 'wed', 'thu','fri', 'sat','sun'];

const openingHours ={
    [weekdays[3]]: {
        open:12,
        close:22,
    },
    [weekdays[4]]: {
        open:11,
        close:23,
    },
    [weekdays[5]]: {
        open:0,
        close:24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'San Francisco',
    categories: ['food', 'pizza', 'vegetarian', 'Orangic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,


   
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];},


    orderDelivery({
        starterIndex =1,
        mainIndex=0, 
        time ='20:00',
        address,
    }) {
        console.log(`orderDelivery! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1,ing2,ing3){
        console.log(
            `here is your decision pasta with ${ing1} and ${ing2} and ${ing3}`
        )
        ;},
    orderPizza(mainIngredient,...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};


const airline = "TAP air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); 

console.log(airline.slice(4));
console.log(airline.slice(4,7));


console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));


const checkMiddleSeat = function(seat){
    const s = seat.slice(-1);

    if(s==='B' || s==='E') console.log('You got a middle seat');
    else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');


console.log(new String('jonas'));
console.log(typeof new String('jonas'));
