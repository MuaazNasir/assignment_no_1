function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
  }
  
  // Call the function with default parameters
  make_shirt();  // prints "A large-sized shirt will be printed with the message: "I love TypeScript"."
  
  make_shirt("medium");  // prints "A medium-sized shirt will be printed with the message: "I love TypeScript"."
  
  make_shirt("small", "TypeScript is my favourite language");  // prints "A small-sized shirt will be printed with the message: "TypeScript is my favoourite language!!"."
  
export default {}