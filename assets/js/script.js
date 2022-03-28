// distinguish different variables lowerCasedCharacters, upperCasedCharacters, numberCharacters & specialCharacters
var lowerCasedCharacters = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
    'v','w','x','y','z',
  ]
  
  var upperCasedCharacters = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
    'V','W','X','X','Y','Z',
  ]
  
  var numberCharacters = [
    '1','2','3','4','5','6','7','8','9','0',
  ]
  
  var specialCharacters = [
    '~','!','@','#','$','%','^','&','*','-','=','+','.','<','>','?','/',':',';','[','{',
  ']','}','|','_',
  ]
  
  // function to get password options
   function getPasswordOptions() {
     // how many characters the password will be
     var length = parseInt(
     prompt('How many Characters would you like your password to be?'),
     );
  
  // Conditional statment seeing if the password is an actual number
  if (Number.isNaN(length)) {
    window.alert('Password lenght must be a number');
    return null;
  }
  
  // Condional statment password must be at least 8 characters long
  if (length < 8) {
    window.alert('Password must be at least 8 characters long');
    return null;
  }
  
  // Conditional statement password cant't be more thatn 120 characters long
  if (length > 120) {
    window.alert('Password can not be longer than 120 characters');
    return null;
  }
  
  // COnfirming lowercase character to store boolean
  var hasLowerCasedCharacters =
  confirm('Click OK to confirm lowercase characters');
  
  // Confirming uppercase characters to store boolean
  var hasUpperCasedCharacters = 
  confirm('Click OK to confirm uppercased characters');
  
  // Confirming number characters to store boolean
  var hasNumberCharacters =
  confirm('Click Ok to confirm numebered characters');
  
  // Confirming special character to store booolean
  var hasSpecialCharacters =
  confirm('Click OK to confirm special characters');
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // conditional statement if no character is selected
  if (
    hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false &&
  hasNumberCharacters === false &&
  hasSpecialCharacters === false
  ) {
  alert('You must select one character for your password.');
  return null;
  }
  
  // storing all of the users input for password
  var passwordOptions = {
    lenght: length,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasNumberCharacters: hasNumberCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
  };
  
    alert('Must select at least one character type');
    return passwordOptions;
  }
  
  // function to generate password with random characters
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  // function to generate the password
  function generatePassword() {
    var options = getPasswordOptions();
  
  // variable to store password info
  var result = [];
  
  // variable to store the different characters in password
  var possibleCharacters = [];
  
  // varible to store the actual characters possibilites that were guaranteed for password
  var guaranteedCharacters = [];
  
  // seeing if option exists, if it doesnt exit the function
  if (!options) return null;
  
  // if the option has lowercase characters add array to password in guaranteed and possible characters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  
  // if the option has uppercase characters add array to password in guaranteed and possible characters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  
  // if the option has numbered characters add array to password in guaranteed and possible characters
  if (options.hasNumberCharacters) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    guaranteedCharacters.push(getRandom(numberCharacters));
  }
  
  // if the option has special characters add array to password in guaranteed and possible characters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  
  // for loop getting all the options user selected taking possible characters and generating random characters
  for (var i = 0; i < options.lenght; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
  
    result.push(possibleCharacter);
  }
  
  // Now we combine the possible character with the one that is guaranteed
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  
  // Now we turn the result into a string and result will show
  return result.join('');
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  
  }
  
  var generateBtn = document.querySelector('#generate');
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  