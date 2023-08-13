// var Assignment Code
var password = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var lenghtPassword = passwordLength();
var passwordInclusionsLenght = passwordInclusionsLenght.length;

for (var i = 0; i < lenghtPassword; i++) {
  password += passwordInclusionsLenght.charAt(
    Math.floor(Math.random() * passwordInclusionsLenght)
  );
}

return password;

function passwordLength() {
  var lenghtPass =
    "enter desired length for new password. It must be between 5 and 14 characters long";
}

If(lengthPass < 8 || lengthPass > 128 || lenghtPass === "");
alert("Invalid Length entry. Length must be between 5 and 14 characters long");
return passwordLength;

lenghtPass = Math.floor(Number(lenghtpass));
return lenghtPass;

var charaInclusions = function () {
  var passwordInclusions = "";
};
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

// Questions to define password configuration

var numbers = confirm("Do you want numbers in your password?");
var special = confirm("Do you want special characters in your password?");
var upperCases = confirm("Do you want uppercases in your password?");
var lowerCases = confirm("Do you want lowercases in your password?");

//Validation

if (confirmSpecialChar == true) {
  passwordInclusion += confirmSpecialChar;
}
if (confirmnumbers == true) {
  passwordInclusion += confirmnumbers;
}
if (confirmLower == true) {
  passwordInclusion += confirmLowerCase;
}
if (confirmUpper == true) {
  passwordInclusion += confirmeUpperCase;
  return passwordInclusions;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
