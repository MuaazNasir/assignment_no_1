function makeSandwich(...items: string[]): void {
  console.log("Making a sandwich with: " + items.join(", "));
}

// Call the function with different numbers of arguments
makeSandwich("lettuce", "tomato", "mayo");
makeSandwich("ketchup", "cucumber");
makeSandwich("cheese slice", "mashrooms");

export default {}