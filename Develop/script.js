//Characters
var specialcharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
  "?",
  "?",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
var upperCasedCharacters = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

function passwordLength() {

  var lengthPass = parseInt(
    prompt("enter desired length for new password. It must be between 8 and 128 characters long"),
  );
  
  console.log(lengthPass)

  var lengthPass = parseInt(
    prompt("Do you want numbers in your password?"),
  );
 
  console.log(lengthPass)

// conditional syntax here

// If(lengthPass < 8 || lengthPass > 128 || lenghtPass === "");

  var numbers = confirm("Do you want numbers in your password?");
// var special = confirm("Do you want special characters in your password?");
// var upperCases = confirm("Do you want uppercases in your password?");
// var lowerCases = confirm("Do you want lowercases in your password?");

};

// var lenghtPassword = passwordLength();
// var passwordInclusionsLenght = passwordInclusionsLenght.length;

// for (var i = 0; i < lenghtPassword; i++) {
//   password += passwordInclusionsLenght.charAt(
//     Math.floor(Math.random() * passwordInclusionsLenght)
//   );
// }

// return password;

// lenghtPass = Math.floor(Number(lenghtpass));
// return lenghtPass;

// var charaInclusions = function () {
//   var passwordInclusions = "";
// };


// Questions to define password configuration


//Validation

// if (confirmSpecialChar == true) {
//   passwordInclusion += confirmSpecialChar;
// }
// if (confirmnumbers == true) {
//   passwordInclusion += confirmnumbers;
// }
// if (confirmLower == true) {
//   passwordInclusion += confirmLowerCase;
// }
// if (confirmUpper == true) {
//   passwordInclusion += confirmeUpperCase;
//   return passwordInclusions;
// }

function generatePassword() {
  passwordLength()
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);