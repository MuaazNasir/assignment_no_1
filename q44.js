"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(...items) {
    console.log("Making a sandwich with: " + items.join(", "));
}
// Call the function with different numbers of arguments
makeSandwich("lettuce", "tomato", "mayo");
makeSandwich("ketchup", "cucumber");
makeSandwich("cheese slice", "mashrooms");
exports.default = {};
