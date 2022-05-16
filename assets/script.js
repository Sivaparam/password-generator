// Javascript for Random Password generator

// Global scope variables 
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "u", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["@", "#", "!", "$", "&", "%", "^", "*", "(", ")", "~", ":", ";"];
var passwordLength = 0;
var includeChars = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get reference to #password element
// Invokes multiple functions to generate random password
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "Your Secure Password";  //initialze passwordtext value
  getLength();
  includeChars = []; //initialize characters to be included
  getCriteria();
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to get password length & validate it
function getLength() {
  passwordLength = prompt("Enter Length of password (atleast 8 and not greater than 128) ");
  if (isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
    getLength();
  }
}

// function to gather users criteria for password and validate it
function getCriteria() {
  alert("Set of messages will be prompted to gather the criteria for password");
  var includeLC = confirm("Do you want LowerCase?");
  var includeUC = confirm("Do you want upperCase?");
  var includeNUM = confirm("Do you want numbers?");
  var includeSC = confirm("Do you want special character?");

  if (!includeLC && !includeUC) {
    console.log("checking for chars");
    alert("Atleast one character type has to be included")
    getCriteria();
  } else {
    console.log("validation done");
    if (includeLC) {
      includeChars = includeChars.concat(lowerCase);
    }
    if (includeUC) {
      includeChars = includeChars.concat(upperCase);
    }
    if (includeNUM) {
      includeChars = includeChars.concat(number);
    }
    if (includeSC) {
      includeChars = includeChars.concat(specialChar);
    }
  }
}

//function that generates random password based on user criteria
function generatePassword() {
  var password = [];
  for (i = 0; i < passwordLength; i++) {
    password += includeChars[Math.floor(Math.random() * includeChars.length)];
  }
  return password;
}