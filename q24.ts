// Tests for equality and inequality with strings:

const str1: string = "hello";
const str2: string = "world";

console.log(str1 === "hello"); // true
console.log(str1 === str2); // false
console.log(str1 !== str2); // true
console.log(str1 !== "hello"); // false

// Tests using the lower case function:

const str: string = "Hello, World!";

console.log(str.toLowerCase() === "hello, world!"); // true
console.log(str.toLowerCase() === "HELLO, WORLD!"); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:

const num1: number = 10;
const num2: number = 5;

console.log(num1 === 10); // true
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 !== 10); // false
console.log(num1 > num2); // true
console.log(num1 >= num2); // true
console.log(num2 < num1); // true
console.log(num2 <= num1); // true

// Tests using "and" and "or" operators:

const value1: boolean = true;
const value2: boolean = false;

console.log(value1 && value2); // false
console.log(value1 || value2); // true
console.log(value2 || value2); // false
console.log(value1 && value1); // true

// Test whether an item is in an array:

const arr: any[] = [1, 2, 3, 4, 5];

console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false

// Test whether an item is not in an array:

const arr2: string[] = ["apple", "banana", "orange"];

console.log(!arr2.includes("grape")); // true
console.log(!arr2.includes("banana")); // false

export default {}