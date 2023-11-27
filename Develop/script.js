// Assignment code here

//declaring the variables
var passwordText = document.querySelector("password");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; //add more symbols 
var characters = 128;

var finalPassword = lowercase + uppercase + numeric + symbol;

//adding the pop up windows 

//declaring the function
function generatePassword() {
  let password = " ";
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += numeric[Math.floor(Math.random() * numeric.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (characters > password.length){
    password += finalPassword[Math.floor(Math.random() * finalPassword.length)];
  }
passwordText.value = password;
}
 //if (lowercase && uppercase && numeric && symbol) {
//  return password;
 //}
 
// if (password.length < 8 && password.length > 128) {
  // alert("Your password should be between 8 and 128 characters long.");
 //} //ensure the user meets the length criteria

// if (lowercase === false && uppercase === false && numeric === fasle && symbol === false) {
  //return "Your password does not meet the criteria. Please include at least a lowercase letter, uppercase letter, numeric value and a special symbol: !@#$%^&*()";
 //} //ensures the user meets the uppercase, lowercase, numeric and symbols criteria


  

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {

//var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; //add more symbols 


//var uppercase = confirm("Click OK to confirm uppercase characters");
//var lowercase = confirm("Click OK to confirm lowercase characters");
//var numeric = confirm("Click OK to confirm numeric values");
//var symbol = confirm("Click OK to confirm special symbols: !@#$%^&*()");

//  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


//Click the button to generate password
//Presented with a serires of prompts to answer
//