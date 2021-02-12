// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input, modification made from passwordText.value 
// to ...textContent to allow password to populate
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set globals variables, and the type of content they will contain
var passRandom = "";
var randomChar = "";
var charAvail = [];
var charCount = [];
var charInt = {};

function generatePassword() {
    // Set basic user questions to determine password length
    while ((charCount) < 8 || (charCount) > 128) {
        charCount = prompt("Please select a character length between 8 and 128");
        charInt = charCount
    }  // function will return the password which will pass through to passwordText.textContent
    return setPassword();
};

function setPassword() {
    // user prompts to determine password contents
    var confNumbers = confirm("Would you like numbers in your password?");
    if (confNumbers === true) {
        charAvail = "0123456789";
    }
    var confUpperLetter = confirm("Would you like upper case letters in your password?");
    if (confUpperLetter === true) {
        charAvail = charAvail + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    var confLowerLetter = confirm("Would you like lower case letters in your password?");
    if (confLowerLetter === true) {
        charAvail = charAvail + "abcdefghijklmnopqrstuvwxyz";
    }
    var confSpecial = confirm("Would you like special characters in your password?");
    if (confSpecial === true) {
        charAvail = charAvail + "~!@#$%^&*?\|,_-";
    }
    // Create loop to generate password, with charCount determining the number of iterations, per the string built above, 
    // and charAvail.length determining the amount of characters available to choose from by the loop
    for (var i = 0; i < charCount; i++) {
        var randomChar = Math.floor(Math.random()*charAvail.length);
        var passChar = charAvail[randomChar];
        passRandom += passChar;
    } // return password to generatePassword to end both functions
    return passRandom;
};
