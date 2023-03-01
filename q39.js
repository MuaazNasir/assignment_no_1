"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with different cities and countries
const location1 = city_country("Lahore", "Pakistan");
console.log(location1); // prints "Lahore, Pakistan"
const location2 = city_country("Makkah", "Saudi Arabia");
console.log(location2); // prints "Makkah", "Saudi Arabia"
const location3 = city_country("Delhi", "India");
console.log(location3); // prints ""Delhi", "India""
exports.default = {};
