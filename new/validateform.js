const form = document.getElementById('fs-frm');
const email = document.getElementById('useremail');
const errorUpper = '&#9888; Your email is in uppercase. Please rewrite it in lowercase.';
const small = document.createElement('small');

function checkCase(input) {
  return /[A-Z]/.test(input); 
}

