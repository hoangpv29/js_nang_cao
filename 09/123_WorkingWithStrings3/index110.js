
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

console.log('a+very+nice+string'.split('+'));
console.log('Tuan Anh'.split(' '));

const [firstName,lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.',firstName,lastName.toUpperCase()].join('---');
console.log(newName);


const captitalizename = function (name) {
    const names = name.split(' ');
    const namesUpper = [];


    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
}


captitalizename('jessica ann smith david');
captitalizename('Jonas Schmedtmann');



const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35,'+'));
console.log('anh'.padStart(4, '+'));


const maskCreditCard = function (numbers) {
    const str = numbers + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}


console.log(maskCreditCard(28923874));
console.log(maskCreditCard(2893432543346));


const message2 = 'Bad weather... All Departues Delayes...';

console.log(message2.repeat(2));

const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'X'.repeat(n)}`);
}

planesInline(12);
