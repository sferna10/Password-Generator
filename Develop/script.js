//Characters
var specialChars = [
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
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = [
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
var upper = [
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

// This is the empty array that we are going use to add the choices the user selected
var passwordChoices = [];
var password = "";

// Originally, your conditional statement was not in your function, giving it a global scope

// var combination=upper+lower+specialChars+num;

//conditional syntax

// if (condition) {

function passwordLength() {
  var lengthPass = parseInt(
    prompt(
      "Enter desired length for new password. It must be between 8 and 128 characters long"
    )
  );

  console.log(lengthPass);

  // this is your conditional
  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    // if the condition is met, the code inside the curly brackets will execute
    // write the code that you want to occur if the password is less than 8, greater than 128, or empty
    prompt("You did not select a valid password length");
  } else {
    var number = confirm("Do you want numbers in your password?");
    // We used confirm instead of prompt because it eliminates user error
    // console.log(number);

    var specialChar = confirm(
      "Do you want special characters in your password?"
    );

    // console.log(specialChar);

    var upperCase = confirm("Do you want Uppercase letters in your password?");

    // console.log(upperCase);

    var lowerCase = confirm("Do you want lowercase letters in your password?");
    // Confirms allow users to click okay or cancel, okay returns "true", cancel returns "false"
    // With a prompt, users can type anything. This is an issue because what if they have a typo? "yess"

    // console.log(lowerCase);

    // How can we take the user's response and use it to add the choices they selected?
    if (number === true) {
      // passwordChoices = nums+specialChar
      passwordChoices = passwordChoices.concat(num);
    }
    if (specialChar === true) {
      passwordChoices = passwordChoices.concat(specialChars);
    }
    if (lowerCase === true) {
      passwordChoices = passwordChoices.concat(lower);
    }
    if (upperCase === true) {
      passwordChoices = passwordChoices.concat(upper);
    }
    // Create the conditional for all the choices

    console.log(passwordChoices);

    // var passwordInclusionsLenght = passwordInclusionsLenght.length;
    for (var i = 0; i < lengthPass; i++) {
      password +=
        passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
      console.log(password);
      // .charAt() is a method for strings, we needed to change it to work with arrays
    }
  }
  // This allows us to return the updated value of the password variable
  return password;
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
// if (confirmnums == true) {
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
  // We know that the passwordLength function returns password
  return passwordLength();
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
