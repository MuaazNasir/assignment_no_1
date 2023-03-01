let alien_color: string = 'green';

// Test for green alien
if (alien_color === 'green') {
  console.log("The player just earned 5 points.");
}

// fail test
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

export default {}