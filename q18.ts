// Store the locations in a array. Make sure the array is not in alphabetical order.
let places:string[] = ['pakistan' , 'india' , 'iran' , 'turkey' , 'japan'];

// Print your array in its original order.
console.log('original list: ' , places);

// Print your array in alphabetical order without modifying the actual list.
console.log('alphabatic order: ' , [...places].sort());

// Show that your array is still in its original order by printing it.
console.log('original list after alphabatic order: ' , places);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('reverse alphabatic order: ' , [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('original list after alphabatic reverse: ' , places);

// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log('list reversed: ' , places);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log('list again reversed: ' , places);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log('list in alphabatic order: ' , places);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort((a,b) => b.localeCompare(a));
console.log('list in reverse alphabatic form: ' , places);

export default {}