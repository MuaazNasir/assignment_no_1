"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alien_color = 'green';
// Test for green alien
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
// fail test
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
exports.default = {};
