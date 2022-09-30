# Module3challenge - Kyle Albright

# User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

```
### Usage
When the user clicks "Generate Password" they are asked to choose a password with characters between 8-128. If the user chooses an invalid number; the number they chose is displayed and they are asked to choose again. If the user's number is valid, their number is displayed and they can move on to the next section. 

In the next section, The user is asked to choose what type of characters they would like their password to include. They can choose uppercase letters, lowercase letters, numbers, and special characters. The user will be shown what choice they have made after each selection. If user made no selections, an alert will show that they must make at least one choice. They are then prompted to start again. 

After all choices have been made, a password with all the specifications chosen will be displayed in the text box. 

### Resources
* w3schools.com
* stackoverflow.com
* https://developer.mozilla.org/en-US/

* Link to Deployed Web Page: https://kylealbright.github.io/module3challenge/
