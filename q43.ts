function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
  console.log('\n')
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push("the Great " + magicians[i]);
  }

  return great_magicians;
}

// Define an array of magician names
const magicians: string[] = ["Munawar Khan", "Shahrukh Zahoor", "Derren Brown", "Telle"];

// Call the make_great() function with a copy of the array
const great_magicians: string[] = make_great([...magicians]);

// Call the show_magicians() function with the original and modified arrays
console.log("Original magicians:");
show_magicians(magicians);

console.log("Great magicians:");
show_magicians(great_magicians);

export default {}