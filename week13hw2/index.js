const birthdayInput = document.getElementById('birthday_input');
const messageText = document.querySelector('.check_message-red')
const buttonCount = document.querySelector('.button_count');
const resultText = document.querySelector('.result');

document.getElementById('birthday_form').addEventListener('submit', function(event) {
  event.preventDefault();
});

function birthdayfunction() {
  let birthdayDate = birthdayInput.valueAsNumber;
  let currentDate = Date.now();
  let timeZone = Math.abs(new Date().getTimezoneOffset());
  let resultDays = Math.ceil((birthdayDate-currentDate+timeZone)/(1000*60*60*24));
console.log((birthdayDate-currentDate+timeZone)/(1000*60*60*24));
  if (resultDays>4 || resultDays==0) {
  a = 'дней';
  b = 'Осталось';
  }else if (resultDays<4 && resultDays>1){
  a = 'дня';
  b = 'Осталось';
  }else{
  a = 'день';
  b = 'Остался';
  }
  if (isNaN(birthdayDate)) {
  messageText.textContent='Введите дату';
  }else{
  messageText.textContent='';
  resultText.textContent = `${b} ${resultDays} ${a}`;
  }
}

buttonCount.addEventListener('click', birthdayfunction);