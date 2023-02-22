"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
var Name = 'HeLlO wOrLd mOHID';
console.log(`in lower case ${Name.toLowerCase()}`);
console.log(`in lower case ${Name.toUpperCase()}`);
let tabName = Name.split(' ');
function tab(str) {
    for (let i = 0; i < tabName.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
    }
    let x = str.join(' ').toString();
    return (x);
}
console.log(`in tab form ${tab(tabName)}`);
exports.default = {};
