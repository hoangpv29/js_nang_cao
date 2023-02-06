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