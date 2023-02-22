"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
// Call the function with different cities and countries
describe_city("Lahore"); // prints "Lahore is in Pakistan."
describe_city("Makkah", "Saudi Arabia"); // prints "Makkah is in Saudi Arabia."
describe_city("Delhi", "India"); // prints "Delhi is in India."
exports.default = {};
