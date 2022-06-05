// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

const characterAmountRange = document.getElementById
('characterAmountRange')

const characterAmountNumber = document.getElementById
('characterAmountNumber')

const includeNumbersElement = document.getElementById
('includeNumbers')

const includeUppercaseElement = document.getElementById
('includeUppercaseElement')

const includeSpecialCharactersElement = document.getElementById
('includeSpecialCharactersElement')



const Form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay')

const LOWER_CHAR_CODES = arrayFromLowtoHigh(65,90) 
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48,57)
const SPECIAL_CHAR_CODES = arrayFromLowtoHigh(33,47).concat(arrayFromLowtoHigh(58,64).concat(arrayFromLowtoHigh(91,96)).concat(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

Form.addEventListener('submit', e=> {
    e.preventDefault()
    
    const characterAmount = characterAmountNumber.value
    console.log(characterAmount)
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked

    const password = generatePassword( characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters)
    passwordDisplay.value = password
  })

function generatePassword( characterAmount, includeUppercase,includeNumbers, includeSpecialCharacters) {
  console.log(characterAmount)
  let charCodes = LOWER_CHAR_CODES
  console.log("before",charCodes)
  console.log('includeUppercase',includeUppercase);
  console.log('includeNumbers',includeNumbers);
  console.log('includeSpecialCharacters',includeSpecialCharacters);

  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  const passwordCharacters = []
  console.log("after", charCodes)
  console.log("poopie", Math.random())
  
  for (let i = 0; i < characterAmount; i++) {
    let randomIndex = Math.ceil(Math.random() * charCodes.length)
    console.log("rando",randomIndex)
    const character = charCodes[randomIndex]
    passwordCharacters.push(String.fromCharCode(character))
    // console.log("passwordcharacters",passwordCharacters)
  }
  console.log("generatedpassword",passwordCharacters.join(''))
  return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low,high) {
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e){
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
};


// Acceptance Criteria
// GIVEN I need a new, secure password 
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




// First prompt: Choose password length
//  Click generate password
//  Show message, "length of at least 8 characters and no more than 128 characters"
//  Show error message if input value is less than 8 or more than 128, or non-numerical 
//  
//  Enter numerical input for prompt
//  Store input value
//  Click submit value fires second prompt

// Second prompt: confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Display checkboxes for each option
// Create for character options Array.prototype.push(), with event listener
// If checkbox is clicked and value is true pushed into the array
// Note: Remove option if unchecked 
// Click "submit form" fires validation function


// Validation Step: input should be validated and at least one character type should be selected
// If array length for greater than 0, return validated. If less than 0, should a message be displayed?
// 
// 
// Password is generated and displayed that matches the selected criteria
// create a function to generate password
// function will consume character options
// Check what the character options are
// generate a passward depending on character options
// Function has to return password
// Take generated password, create selector to update value, place in the div for display

// Dan's tips:
// Switch case statement for generating function
// Find correct method on the page, explore .find, .indexOf, .findIndex

// ES6 Array Function
// const generatePassword = (characterOptions) => {
//   let password;
//   // create password here depending onb the cgharacter options
//   return password
// }

// // Anonymous Function
// function () {

// }

// function generatePassword() {

// }