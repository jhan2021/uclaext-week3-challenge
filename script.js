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

const length = document.querySelectorAll("#length");
const lowercase = document.querySelectorAll("#lowercase");
const uppercase = document.querySelectorAll("#uppercase");
const numeric = document.querySelectorAll("#numeric");
const special = document.querySelectorAll("#special");

function generatePassword() {
  // If length is valid:
  //   If characterization is selected
  //     Generate a random password
  //   else
  //     Generate an error
  // Else length is not valid
  //   Generate an error message 
  if(length[0].value >= 8 && length[0].value <= 128){
    console.log(length[0].value)
    console.log(lowercase[0].value)
    console.log(uppercase[0].value)
    console.log(numeric[0].value)
    console.log(special[0].value)
    document.getElementById("password").style.color = "black";
    return createPassword(length[0].value);
  }else{
    document.getElementById("password").style.color = "red";
    return "Please enter a valid length between 8 and 128 characters.";
  }
}

var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "0123456789";
var specialString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passwordGenerator = {0: lowercaseString, 1: uppercaseString, 2: numericString, 3: specialString};
console.log(passwordGenerator)

function createPassword(length){
  var inputs = [];
  var createdPassword = "";
  if(lowercase[0].checked){
    inputs.push("0");
  }
  if(uppercase[0].checked){
    inputs.push("1");
  }
  if(numeric[0].checked){
    inputs.push("2");
  }
  if(special[0].checked){
    inputs.push("3");
  }
  if(inputs.length == 0){
    document.getElementById("password").style.color = "red";
    return "Please select a valid characterization.";
  } else{
    document.getElementById("password").style.color = "black";
    for (var i = 0; i < length; i++){
      var k = inputs[Math.floor(Math.random() * inputs.length)];
      createdPassword = createdPassword + passwordGenerator[k].charAt(Math.floor(Math.random() * passwordGenerator[k].length));
    }
    return createdPassword;
  }
}

console.log(passwordGenerator["1"].charAt(Math.floor(Math.random() * passwordGenerator["1"].length)))