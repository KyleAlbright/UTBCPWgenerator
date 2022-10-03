// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Sets all the arrays with the characters we will use as well as the generated password. This was moved to global so the new function has access.
  var possibleCharacters=[]
  var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numeric=["0","1","2","3","4","5","6","7","8","9"];
  var symbols=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","?","@","[","]","^","_","`","{","|","}","~"];

// This is the main function that will generate the password.
function generatePassword() {
  possibleCharacters = [];

  //This prompts the user to choose a number 8-128
  var numOfCharacters = prompt(
    "Choose password length. (A number between 8-128)"
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

  //new function that will chose the type of characters. This was created so the user wont have to start at the very beginning if they didn't choose a type of character
  promptChars();

  
  //This will generate the length of the password while waiting for the new function to choose the type of characters.
  var makePassword = "";
  for (var i = 0; i < numOfCharacters; i++) {
    let random = [Math.floor(Math.random() * possibleCharacters.length)];
    makePassword = makePassword + possibleCharacters[random];
  }

  return makePassword;
}

  function promptChars() {

//prompts the user to choose if they want to use lowerCase, then alerts them to what they chose.
  var choiceLowerCase = confirm("Do you want lowerCase characters?");
  if (choiceLowerCase) {
    alert("You want Lowercase!");
  } else {
    alert("You don't want Lowercase. ");
  }

  //prompts the user to choose if they want to use upperCase, then alerts them to what they chose.
  var choiceUpperCase = confirm("Do you want UpperCase characters?");
  if (choiceUpperCase) {
    alert("You want Uppercase!");
  } else {
    alert("You don't want Uppercase. ");
  }

  //prompts the user to choose if they want to use numbers, then alerts them to what they chose.
  var choiceNumeric = confirm("Do you want Numeric characters?");
  if (choiceNumeric) {
    alert("You want Numbers!");
  } else {
    alert("You don't want Numbers. ");
  }

  //prompts the user to choose if they want to use symbols, then alerts them to what they chose.
  var choiceSymbols = confirm("Do you want Special characters?");
  if (choiceSymbols) {
    alert("You want Special characters!");
  } else {
    alert("You don't want Special characters. ");
  }
// checks that the user chose at least one option
  if (
    !choiceLowerCase &&
    !choiceUpperCase &&
    !choiceNumeric &&
    !choiceSymbols
  ) {
    //if user did not choose one option, it will run the function again
    alert("You must choose at least one option!");
    promptChars();
  }

  // This will chose the types of characters the user wants and concat them to the password
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
}
// Write password to the #password input
function writePassword() {
  console.log("generatingPassword");
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
