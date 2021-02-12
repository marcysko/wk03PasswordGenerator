// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
    
//set global variables
    var passRandom = "";
    var randomChar = "";
    var charAvail = [];
    var charCount = [];
    var charInt = {};
    
    function generatePassword() {
    // Set prompts for the length of the password
     while ((charCount) < 8 || (charCount) > 128) {
        charCount = prompt("Your password must be between 8 and 128 characters.");
        charInt = charCount 
     } // function will return the password which will pass through to passwordText.textContent
     return setPassword();
};

    function setPassword() {
        //
    }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
