function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}
  
// Call the function with different cities and countries
describe_city("Lahore");  // prints "Lahore is in Pakistan."
  
describe_city("Makkah", "Saudi Arabia");  // prints "Makkah is in Saudi Arabia."
  
describe_city("Delhi", "India");  // prints "Delhi is in India."

export default {}