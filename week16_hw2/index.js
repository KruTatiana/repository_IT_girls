const form = document.querySelector('.form_reg');
const userNameInput = document.getElementById('user_name');
const userEmailInput = document.getElementById('user_email');
const userAgeInput = document.getElementById('user_age');
const selectElement = document.querySelector('.select_list');
const radioElementMan = document.querySelector('.radio_man');
const radioElementWoman = document.querySelector('.radio_woman');
const userPasswordInput = document.getElementById('passvord_input');
const checkpoint = document.querySelector('#check_agree');
const button = document.querySelector('.form_reg__button');
const userNameError = document.getElementById('errorName');
const emailError = document.getElementById('errorEmail');
const ageError = document.getElementById('errorAge');
const radioError = document.getElementById('errorRadio');
const selectError = document.getElementById('errorSelect');
const passwordError = document.getElementById('errorPassword');
const termsError = document.getElementById('termsError');

userNameInput.addEventListener('focus', function () {
  userNameInput.style.border = '2px solid #FA69E6'; 
});

userNameInput.addEventListener('blur', function () {
  userNameInput.style.border = ''; 
});

userEmailInput.addEventListener('focus', function () {
  userEmailInput.style.border = '2px solid #FA69E6'; 
});

userEmailInput.addEventListener('blur', function () {
  userEmailInput.style.border = ''; 
});

userAgeInput.addEventListener('focus', function () {
  userAgeInput.style.border = '2px solid #FA69E6'; 
});

userAgeInput.addEventListener('blur', function () {
  userAgeInput.style.border = ''; 
});

selectElement.addEventListener('focus', function () {
  selectElement.style.border = '2px solid #FA69E6'; 
});

selectElement.addEventListener('blur', function () {
  selectElement.style.border = ''; 
});

userPasswordInput.addEventListener('focus', function () {
  userPasswordInput.style.border = '2px solid #FA69E6'; 
});

userPasswordInput.addEventListener('blur', function () {
  userPasswordInput.style.border = ''; 
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let hasError = false;
  userNameError.style.display = 'none';
  emailError.style.display = 'none';
  ageError.style.display = 'none';
  selectError.style.display = 'none';
  passwordError.style.display = 'none';
  termsError.style.display = 'none';

  function validateName(name) {
    let regex = /([А-Я]{1}[а-яё]{1,19})/g;
    return regex.test(name);
  }

  function validateAge(age) {
    let regex = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
    return regex.test(age);
  }

  function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  if (validateName(userNameInput.value.trim()) === false) {
    userNameError.textContent = 'Введите корректное имя пользователя.';
    userNameError.style.display = 'block';
    hasError = true;
    return hasError;
  }

  if (validateEmail(userEmailInput.value) === false) {
    emailError.textContent = 'Введите корректный email.';
    emailError.style.display = 'block';
    hasError = true;
    return hasError;
  }

  if (validateAge(userAgeInput.value.trim()) === false) {
    ageError.textContent = 'Не верно введён возраст';
    ageError.style.display = 'block';
    hasError = true;
    return hasError;
  }

  if (selectElement[0].selected === true) {
		selectError.textContent = 'Выберите один из вариантов';
    selectError.style.display = 'block';
    hasError = true;
    return hasError;
  }

  if (!radioElementMan.checked && !radioElementWoman.checked) {
		radioError.textContent = 'Выберите один из вариантов';
    radioError.style.display = 'block';
    hasError = true;
    return hasError;
  }else if (!radioElementMan.checked | !radioElementWoman.checked){
    radioError.style.display = 'none';
    hasError = false;
  }

  if (!userPasswordInput.value) {
    passwordError.textContent = 'Введите пароль';
    passwordError.style.display = 'block';
    hasError = true;
    return hasError;
  }

  if (checkpoint.checked === false) {
    termsError.textContent = 'Необходимо согласие с условиями.';
    termsError.style.display = 'block';
    hasError = true;
    return hasError;
  }
  
  if (hasError === false) {
    button.removeAttribute('disbled');
    const rado_value = document.getElementsByName('gender_radio');
    for (let inp of rado_value) {
      if (inp.checked){
        console.log(inp.value);
        break;
      }
    }
    console.log(userNameInput.value);
    console.log(userEmailInput.value);
    console.log(userAgeInput.value);
    console.log(selectElement.value);
    console.log(userPasswordInput.value);
    console.log(checkpoint.value);
    form.reset();
  }
});