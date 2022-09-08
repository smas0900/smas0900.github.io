const form = document.getElementById('fs-frm');
const email = document.getElementById('useremail');
const errorUpper = '&#9888; Your email is in uppercase. Please rewrite it in lowercase.';
const small = document.createElement('small');

function checkCase(input) {
  return /[A-Z]/.test(input);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = false;

  const inputEmail = email.value.trim();
  if (checkCase(inputEmail)) {
    form.appendChild(small);
    small.innerHTML = errorUpper;
  } else {
    isValid = true;
  }

  if (isValid) {
    form.removeChild(small);
    form.submit();
  }
});
