
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

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


const passenger = 'jONAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97$';
const priceUS = priceGB.replace('$','VND').replace(',','.');
console.log(priceUS);


const announcement = 'All passengeners come to barding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door','gate'));
console.log(announcement.replace(/door/g,'gate'));


const plane = 'Airbus A320neo';

console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));


if (plane.startsWith('Airbus')&&plane.endsWith('neo')) {
    console.log('New');
}



const checkBaggage = function (item) {
    const baggage = item.toLowerCase();
    if(baggage.includes('knife')||baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    }else{
        console.log('Wellcome');
    }
};

checkBaggage('I have a laptop. some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snack');