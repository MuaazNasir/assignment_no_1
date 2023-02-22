"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacture, modal, ...option) {
    const car = { manufacture, modal };
    for (const [key, value] of option) {
        car[key] = value;
    }
    return car;
}
const myCar = make_car('Toyota', 'Camry', ['color', 'blue'], ['year', 2020]);
console.log(myCar);
exports.default = {};
