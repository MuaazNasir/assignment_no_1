"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['hamza', 'raza', 'mohid', 'bilal'];
for (let guest of guests) {
    console.log(`hey ${guest}, you are invited to the dinner party...`);
}
;
console.log(`i am inviting ${guests.length} to the dinner party...`);
exports.default = {};
