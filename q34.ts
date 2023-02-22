let pizzas: string[] = ['Pepperoni', 'cheesy', 'chicken tikka'];

// printing pizza names
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
  if(i == 2){
    console.log('\n')
  }
}

// printing sentences about pizza preferences
for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza. it is very tasty`);
  if(i == 2){
    console.log('\n')
  }
}

// expressing love for pizza
console.log("I really love pizza!");

export default {}