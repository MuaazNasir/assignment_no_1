"use strict";
exports.__esModule = true;
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with different cities and countries
var location1 = city_country("Lahore", "Pakistan");
console.log(location1); // prints "Lahore, Pakistan"
var location2 = city_country("Makkah", "Saudi Arabia");
console.log(location2); // prints "Makkah", "Saudi Arabia"
var location3 = city_country("Delhi", "India");
console.log(location3); // prints ""Delhi", "India""
exports["default"] = {};
