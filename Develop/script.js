// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
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
        //user prompts to determine password contents
        var confNumbers = confirm("Do you want numbers in your password?");
        if (confNumbers === true) {
            charAvail = "0123456789";     
        }
        var confUpperLetter = confirm("Do you want UPPER case letters in your password?");
        if (confUpperLetter ===true) {
            charAvail = charAvail + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        var confLowerLetter = confirm("Do you want lower case letters in your password?");
        if (confLowerLetter === true) {
            charAvail = charAvail + "abcdefghijklmnopqrstuvwxyz";
        }
        var confSpecial = confirm("Do you want special characters in your password?");
        if (confSpecial === true) {
            charAvail = charAvail + "~!@#$%^&*?\|,_-";
        }
        // Create loop to generate password, with Charcount determining the number of iterations and charAvail.length 
        // determining the number of characters to choose from
        for (var i=0; i< charCount; i++) {
            var randomChar = Math.floor(Math.random()*charAvail.length);
            
        }
  
