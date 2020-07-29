// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // Initialize required variables
  var password = "Error: Please Try Again";
  var isValid = true;

  var numericCharSelector = '0987654321';
  var lowerCaseSelector = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseSelector = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharSelector = "+_*&^%$#@!?></.,[]{}|\\=-\"':\;";

  var selectorArray = [];


  // prompts the user the password requirements
  var passwordLength = parseInt(prompt("How long is your password? Enter a number between 8 to 128."));
  var hasLowerCase = confirm("Does it require lower case characters?");
  var hasUpperCase = confirm("Does it require upper case characters?");
  var hasNumeric = confirm("Does it require numeric characters?");
  var hasSpecial = confirm("Does it require special characters?");

  // Validity check
  if (isNaN(passwordLength) || ((passwordLength < 8) || (passwordLength > 128))) {
    alert("Please enter a number to indicate the length of the password between 8 to 128.");
    isValid = false;
  }

  if (!(hasSpecial || hasNumeric || hasUpperCase || hasLowerCase)) {
    alert("Please select at least one character type.");
    isValid = false;
  }

  if (isValid) {
    password = "";
    // Load requirements into the selector 
    if (hasSpecial) {
      selectorArray.push(specialCharSelector);
    }

    if (hasNumeric) {
      selectorArray.push(numericCharSelector);
    }

    if (hasUpperCase) {
      selectorArray.push(upperCaseSelector);
    }

    if (hasLowerCase) {
      selectorArray.push(lowerCaseSelector);
    }


    // load characters into the password variable to be returned back to main
    for (var count = 0; count < passwordLength; count++) {
      var selector = Math.floor(Math.random() * selectorArray.length);
      var character = Math.floor(Math.random() * selectorArray[selector].length);
      password += (selectorArray[selector][character]);
    }
  }

  return password;

}