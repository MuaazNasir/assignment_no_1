"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let cars;
cars = ['Tesla', 'Honda', 'BMW', 'Lamborghini'];
for (let i = 0; i < cars.length; i++) {
    let message = `I would like to own a ${cars[i]} car...`;
    console.log(message);
}
exports.default = {};
