var alien_color: string = 'green';

// Test for green alien
if (alien_color === 'green') {
  console.log("The player just earned 5 points.");
}
else {
  console.log("The player just earned 10 points.");
}

// new version
alien_color = 'yellow';
if (alien_color === 'green') {
  console.log("The player just earned 5 points.");
}
else {
  console.log("The player just earned 10 points.");
}

export default {}
