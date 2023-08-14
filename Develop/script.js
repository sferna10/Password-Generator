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
    prompt(
      "Enter desired length for new password. It must be between 8 and 128 characters long"
    )
  );

  console.log(lengthPass);

  var numberchoice = parseInt(
    prompt("Which numbers do you want in your password?")
  );

  console.log(numberchoice);

  var specialchar = parseInt(
    prompt("Which special characters do you want in your password?")
  );

  console.log(specialchar);

  var Upperchoice = parseInt(
    prompt("Which Uppercases do you want in your password?")
  );

  console.log(choiceUpper);

  var lowerchoice = parseInt(
    prompt("Which lowercases do you want in your password?")
  );

  console.log(lowerchoice);

  // conditional syntax here

  // If(lengthPass < 8 || lengthPass > 128 || lenghtPass === "");
}

// var lenghtPassword = passwordLength();
// var passwordInclusionsLenght = passwordInclusionsLenght.length;

// for (var i = 0; i < lenghtPassword; i++) {
//   password += passwordInclusionsLenght.charAt(
//     Math.floor(Math.random() * passwordInclusionsLenght)
//   );
// return passwordLength;
// 

// lenghtPass = Math.floor(Number(lenghtpass));
// return lenghtPass;

// var charaInclusions = function () {
//   var passwordInclusions = "";
// };

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
  passwordLength();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
