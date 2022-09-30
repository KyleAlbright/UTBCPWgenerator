// Assignment Code
var generateBtn = document.querySelector("#generate");

// This is the main function that will generate the password.

function generatePassword() {
  // Sets all the arrays with the characters we will use as well as the generated password.
  var possibleCharacters=[]
  var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numeric=["0","1","2","3","4","5","6","7","8","9"];
  var symbols=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","?","@","[","]","^","_","`","{","|","}","~"];

  //This prompts the user to choose a number 8-128
  var numOfCharacters = prompt(
    "Choose password length. (A number between 8-128.)"
  );

  //while loop to make sure they choose a character between 8-128 and ask them to try again if they chose an invalid number.

  while (numOfCharacters < 8 || numOfCharacters > 128) {
    numOfCharacters = prompt(
      "You entered " +
        numOfCharacters +
        ". Password must be between 8 and 128. Try again"
    );
  }

  //Tells the user what number they chose.
  alert("You entered " + numOfCharacters + ".");

  //prompts the user to choose if they want to use lowerCase, then alerts them to what they chose.
  var choiceLowerCase = confirm("Do you want lowerCase characters?");
  if (choiceLowerCase == true) {
    alert("You want Lowercase!");
  } else {
    alert("You don't want Lowercase ");
  }

  //prompts the user to choose if they want to use upperCase, then alerts them to what they chose.
  var choiceUpperCase = confirm("Do you want UpperCase characters?");
  if (choiceUpperCase == true) {
    alert("You want Uppercase!");
  } else {
    alert("You don't want Uppercase ");
  }

  //prompts the user to choose if they want to use numbers, then alerts them to what they chose.
  var choiceNumeric = confirm("Do you want Numeric characters?");
  if (choiceNumeric == true) {
    alert("You want Numbers!");
  } else {
    alert("You don't want Numbers ");
  }

  //prompts the user to choose if they want to use symbols, then alerts them to what they chose.
  var choiceSymbols = confirm("Do you want Special characters?");
  if (choiceSymbols == true) {
    alert("You want Special characters!");
  } else {
    alert("You don't want Special characters ");
  }
  //If the user chose none of the options, will ask them to start over
  while (
    choiceLowerCase == false &&
    choiceUpperCase == false &&
    choiceNumeric == false &&
    choiceSymbols == false
  ) {
    alert("You must choose at least one option!");
    return "Click Generate Password again.";
  }

  //this adds and groups the types of characters chosen
  if (choiceLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  if (choiceUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  if (choiceNumeric) {
    possibleCharacters = possibleCharacters.concat(numeric);
  }
  if (choiceSymbols) {
    possibleCharacters = possibleCharacters.concat(symbols);
  }

  //This will generate the password based on the length chosen
  var makePassword = "";
  for (var i = 0; i < numOfCharacters; i++) {
    let random = [Math.floor(Math.random() * possibleCharacters.length)];
    makePassword = makePassword + possibleCharacters[random];
  }

  return makePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
