"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['haseeb', 'zaigam', 'hamza', 'imran'];
let new_users = ['raza', 'ali', 'imran', 'abdullah'];
for (let i = 0; i < new_users.length; i++) {
    let new_username = new_users[i].toLowerCase();
    if (current_users.indexOf(new_username) !== -1) {
        console.log(`Sorry, the username "${new_users[i]}" is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations, the username "${new_users[i]}" is available!`);
        current_users.push(new_username);
    }
}
console.log(current_users);
exports.default = {};
