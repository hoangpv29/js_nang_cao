'use strict';
const bookings =[];
const createBooking = function(fligtNum,numPassengers =1, price=199* numPassengers){
    // numPassengers = numPassengers || 1;
    // price=price ||199;

    const booking = {
        fligtNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LJ123',2,800);
createBooking('LJ123',2);
createBooking('LJ123',5);
createBooking('LJ123',undefined,1000);