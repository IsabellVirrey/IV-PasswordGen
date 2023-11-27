//declaring the variables


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; //add more symbols 

var characters = 8; //the longest length the password can be

var CharacterChoice = [];


var generateBtn = document.querySelector("#generate"); //step 1 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //step 2


// Write password to the #password input
function writePassword() {
  var CorrectQuestions = Questions(); //returns true or false 
  var passwordText = document.querySelector("#password");

  if (CorrectQuestions){ //I only want this to happen if the user answered all of the quesitons correctly
    var FinalPassword = generatePassword();
    passwordText.value = FinalPassword;
  } else {
    passwordText.value = "";
  }


}

function generatePassword() {
  var password = " ";
  for (var i = 0; i < characters; i++) {
    var RandomCharacter = Math.floor(Math.random() * CharacterChoice.length); 
    password = password + CharacterChoice[RandomCharacter];
  }
  return password;
  //let password = " ";
  //password += lowercase[Math.floor(Math.random() * lowercase.length)];
  //password += uppercase[Math.floor(Math.random() * uppercase.length)];
  //password += numeric[Math.floor(Math.random() * numeric.length)];
  //password += symbol[Math.floor(Math.random() * symbol.length)];

//  while (characters > password.length){
  //  password += finalPassword[Math.floor(Math.random() * finalPassword.length)];
  //}
//passwordText.value = password;
}

function Questions(){
  CharacterChoice = "";
  characters = parseInt(prompt("How many characters do you want your password to be? Please select between 8-28 characters."));

  if (isNaN(characters) || characters < 8 || characters > 128) { //this should be all false
  alert("Error: please select a number between 8 and 128");
  return false;
  }
if (confirm("Confirm if you would like lowercase letters?")){
  CharacterChoice = CharacterChoice.concat(lowercase);
}
  return true;
}
