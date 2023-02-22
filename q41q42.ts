function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}
 
  // Define an array of magician names
const magicians: string[] = ["Munawar Khan", "Shahrukh Zahoor", "Derren Brown", "Teller"];
  
  // Call the make_great() function to modify the array
make_great(magicians);
  
  // Call the show_magicians() function with the modified array
show_magicians(magicians);
  
export default {}