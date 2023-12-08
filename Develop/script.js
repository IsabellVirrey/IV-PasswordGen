//declaring the variables


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "/", "|", "{", "}", "-", "_", "+", "=", ":", ";", "<", ">", ",", ".", "?", "/"]; //used all the symbols on keyboard except " and ' 
var characters = 8; //the length the password can be, I just started with 8 because of the 8-25 character
var CharacterChoice = []; //to store

var generateBtn = document.querySelector("#generate"); //step 1, select the generate ID used for the button

generateBtn.addEventListener("click", writePassword); //step 2, click on the button then perform the writePassword function


function writePassword() { //step 3, go into the write Password function and then you first call the Questions function
  var CorrectQuestions = Questions(); //returns true or false from the Questions function below
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
}

function Questions(){
  CharacterChoice = [];
  characters = parseInt(prompt("How many characters do you want your password to be? Please select between 8-28 characters.")); //the 'prompt' makes a window pop up with the question for the user to answer and the 'parseInt' will make the response as a number 

if (isNaN(characters) || characters < 8 || characters > 128) { //this should be all false
  alert("Error: please select a number between 8 and 128"); //'alert' XXXXXXXX
  return false;
  }
if (confirm("Confirm if you would like lowercase letters?")){
  CharacterChoice = CharacterChoice.concat(lowercase); //I used concat() is used to merge the arrays
} //'confirm' XXXXXX
if (confirm("Confirm if you would like uppercase letters?")){
  CharacterChoice = CharacterChoice.concat(uppercase); //I used concat() is used to merge the arrays
} //'confirm' XXXXXX
if (confirm("Confirm if you would like numbers?")){
  CharacterChoice = CharacterChoice.concat(numeric); //I used concat() is used to merge the arrays
} //'confirm' XXXXXX
if (confirm("Confirm if you would like special symbols: !@#$%^&*()")){
  CharacterChoice = CharacterChoice.concat(symbol); //I used concat() is used to merge the arrays
} //'confirm' XXXXXX
  return true;
}
