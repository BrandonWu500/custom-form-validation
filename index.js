const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const valid = checkInputs();
  if (!valid) {
    e.preventDefault();
  }
});

function checkInputs() {
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');

  if (!username.value) {
    markInvalid(username, 'username cannot be blank');
  } else {
    markValid(username);
  }
  if (!email.value) {
    markInvalid(email, 'email cannot be blank');
  } else if (!isEmail(email.value)) {
    markInvalid(email, 'invalid email');
  } else {
    markValid(email);
  }
  if (!password.value) {
    markInvalid(password, 'password cannot be blank');
  } else {
    markValid(password);
  }
  if (!password2.value) {
    markInvalid(password2, 'password cannot be blank');
  } else if (password.value !== password2.value) {
    markInvalid(password2, 'passwords do not match');
  } else {
    markValid(password2);
  }

  const formCtrls = [...form.children];
  if (
    formCtrls.every((ctrl) => {
      return !ctrl.classList.contains('invalid');
    })
  ) {
    return true;
  }
  return false;
}

function markInvalid(input, msg) {
  const formControl = input.closest('.form-control');
  formControl.classList.add('invalid');
  const error = formControl.querySelector('.error');
  error.textContent = msg;
}

function markValid(input) {
  const formControl = input.closest('.form-control');
  if (formControl.classList.contains('invalid')) {
    formControl.classList.remove('invalid');
  }
  formControl.classList.add('valid');
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
