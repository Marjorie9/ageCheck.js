// Prompt the user for their age
let age = parseInt(prompt("Please enter your age:"));
  
// Check if the age is valid (a number)
if (isNaN(age)) {
  alert("Please enter a valid number for your age.");
} else {
  // Use if-else statements to determine the age category
  if (age < 13) {
    alert("You are a child.");
  } else if (age >= 13 && age <= 19) {
    alert("You are a teenager.");
  } else {
    alert("You are an adult.");
  }
}

// Call the checkAge function to start the program
checkAge();