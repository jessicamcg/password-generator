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

// my code

var spchar = ['!','@','#','$','%','^','&','*','_','-','?','(',')','+','.','/',':',';','<','>','=','[',']','^','~'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nums = ['1','2','3','4','5','6','7','8','9','0'];


function generatePassword() {
  var possiblePassword = [];
  var length = window.prompt('Length of password: ');

  while (length < 8 || length > 128 || !Number.isInteger(Number(length))) {
    length = prompt("Password length must be an integer between 8 and 128 characters. Please try again: ");
  };

  var checkspchar = window.confirm('Do you want to include special characters? ');
  var checklower = window.confirm('Do you want to include lowercase letters? ');
  var checkupper = window.confirm('Do you want to include uppercase letters? ');
  var checknums = window.confirm('Do you want to include numbers? ');

  if (checkspchar) {
    possiblePassword = possiblePassword.concat(spchar);
  };

  if (checklower) {
    possiblePassword = possiblePassword.concat(lower);
  };

  if (checkupper) {
    possiblePassword = possiblePassword.concat(upper);
  };

  if (checknums) {
    possiblePassword = possiblePassword.concat(nums);
  };
  
  if (possiblePassword.length == 0) {
    window.alert('Password must include some characters....');
    return 'No Criteria selected. Try again';
  } else {
    var result = '';
    for ( var i = 0; i < length; i++ ) {
      result = result + possiblePassword[Math.floor(Math.random() * possiblePassword.length)];
    }
    return result;
  };
};

