"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
    console.log('\n');
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}
// Define an array of magician names
const magicians = ["Munawar Khan", "Shahrukh Zahoor", "Derren Brown", "Telle"];
// Call the make_great() function with a copy of the array
const great_magicians = make_great([...magicians]);
// Call the show_magicians() function with the original and modified arrays
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(great_magicians);
exports.default = {};
