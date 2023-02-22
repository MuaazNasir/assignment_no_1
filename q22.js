"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = ['a', 'b', 'c'];
console.log(arr[3]); //it gives undefined bcz 3rd index doesnot exist
console.log('correcting');
for (let i of arr) {
    console.log(i);
}
exports.default = {};
