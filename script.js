const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// SHOW INPUT ERROR MESSAGE
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

// SHOW SUCCESS OUTLINE
const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// CHECK EMPTY
const checkEmpty = input => {
  let inputName =
    input.id.toString()[0].toUpperCase() + input.id.toString().slice(1);
  if (input.id.toString() === 'password2') {
    inputName = 'Confirm password';
  }
  if (input.value === '') {
    showError(input, `${inputName} is required!`);
  } else {
    showSuccess(input);
  }
};

// EVENT LISTENER
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
  checkEmpty(username);
  checkEmpty(email);
  checkEmpty(password);
  checkEmpty(password2);
});
