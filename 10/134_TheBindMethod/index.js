const lufthansa ={
    airline: 'Luddthansa',
    iataCode: 'LH',
    booking :[],
    // book: function(){}
    book(flightNum,name){
        console.log(`
        ${name} booked  seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    },
};
lufthansa.book(239, 'Jonas Schemdman');
lufthansa.book(635 , 'Jonas Smith');
console.log(lufthansa);
const eurowings ={
    name: 'Eurowings',
iataCode:'EM',
bookings: [],
};
const book = lufthansa.book;
// does not Worker
book(23,'Sarah WIlliams');
book.call(eurowings,23,'Sarah Williams');
console.log(eurowings);
book.call(lufthansa,239,'Mary Cooper');
console.log(lufthansa);
const swiss ={
    name: 'Swiss Air Lines',
iataCode:'LX',
bookings: [],
};
book.call(swiss,583,'Mary Cooper');
const flighData = [583,'George Cooper'];
book.apply(swiss,flighData);
console.log(swiss);
book.call(swiss,...flighData);
//bind method
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLx = book.bind(swiss);
bookEw(23,'Steven Williams');
const bookEW23 = book.bind(eurowings,23);
bookEW23('jonas Schemdtmann');
bookEW23('Marttha Cooper');
//with event listeners
lufthansa.planes =300;
lufthansa.buyPlane =function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));
const addTax =(rate,value)=> value+value* rate;
const addVAT = addTax.bind(null,0.23);
console.log(addVAT(100));
console.log(addVAT(23));
const addTaxRate = function(rate){
    return function(value){
        return value +value*rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));