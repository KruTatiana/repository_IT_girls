const userNameInput = document.getElementById('user_email');
const userEmailInput = document.getElementById('user_email');
const userAgeInput = document.getElementById('user_age');
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

document.querySelector('.form_reg').addEventListener('submit', function(evt) {
  evt.preventDefault();
  let hasError = false;
  userNameError.style.display = 'none';
  emailError.style.display = 'none';
  ageError.style.display = 'none';
  selectError.style.display = 'none';
  passwordError.style.display = 'none';
  termsError.style.display = 'none';

  if (validateName(userNameInput.value.trim()) === false) {
         //сделать проверку через регексп только буквы и пробелы
    userNameError.textContent = 'Введите корректное имя пользователя.';
    userNameError.style.display = 'block';
    hasError = true;
  }

  if (validateEmail(emailInput.value) === false) {
    emailError.textContent = 'Введите корректный email.';
    emailError.style.display = 'block';
    hasError = true;
  }

  if (validateAge(userAgeInput.value.trim()) === false) {
    ageError.textContent = 'Введите возраст в формате ДД.ММ.ГГГГ.';
    ageError.style.display = 'block';
    hasError = true;
  }



  //радиокнопки "выберите один из вариантов"

  //селект - выбрать один из вариантов кроме [0]
  if (selectElement[0].selected == true) {
		document.body.style.backgroundColor = '#99ffcc';
		return;
  }//исправить

  if (!userPasswordInput.value) {
    passwordError.textContent = 'Введите пароль';
    passwordError.style.display = 'block';
    hasError = true;
  }

  if (checkpoint.checked === false) {
    termsError.textContent = 'Необходимо согласие с условиями.';
    termsError.style.display = 'block';
    hasError = true;
  }

  function validateName(name) {
    let regex = /.[^0-9]/g;
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

  // if (hasError === false) {
  // вывод всех полей в консоль, активация кнопки отправки и очистить форму
  //   alert('Форма успешно отправлена!');
  //   console.log()
  // }
});
