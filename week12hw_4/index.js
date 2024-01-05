const userName = document.getElementById('name__input');
const avatar = document.getElementById('link_avatar__input');
const messageTime = document.querySelector('.message_time');
const comment = document.getElementById('comment_place__input');
const button = document.getElementById('button_send');
const chatAvatar = document.querySelector('.chat_avatar');
const message = document.querySelector('.chat_message');
const chatNick = document.querySelector('.chat_nick');
const form = document.querySelector('#coment_form');
const yesName = document.getElementById('yes_name');
const noName = document.getElementById('no_name');

console.log(avatar.value);

document.getElementById('coment_form').addEventListener('submit', function(event) {
    event.preventDefault();
});

let resultName = () => {
    let stringUserName = userName.value.trim();
    let modifiedLetters = stringUserName[0].toUpperCase() + stringUserName.slice(1).toLowerCase();
    userName.value = modifiedLetters;
    return modifiedLetters;
        };

userName.onchange = resultName;

let resultAvatar = () => {
    if (avatar.value != ''){
    let imgLink = avatar.value;
    chatAvatar.setAttribute('src', imgLink);
    }else{
        let baseImg = `./assets/img/${Math.ceil(Math.random()*10-1)}.jpg`;
        chatAvatar.setAttribute('src', baseImg);
    }
        };

let checkSpam = () => {
    let str = comment.value;
    let newStr = str.replace(/viagra|xxx/ig, "***");
    message.textContent = newStr;
}

let datePrint = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    switch (currentMonth) {   
        case 0: monthStr = 'yan';
            break;
        case 1: monthStr = 'feb';
            break;
        case 2: monthStr = 'mar';
            break;
        case 3: monthStr = 'apr';
            break;
        case 4: monthStr = 'may';
            break;
        case 5: monthStr = 'jun';
            break;
        case 6: monthStr = 'jul';
            break;
        case 7: monthStr = 'aug';
            break;
        case 8: monthStr = 'sen';
            break;
        case 9: monthStr = 'okt';
            break;
        case 10: monthStr = 'nov';
            break;
        case 11: monthStr = 'dec';
            break;
    };
    messageTime.textContent = currentDay + ' ' + monthStr + ' ' + currentYear + ' ' + currentHour + ":" + currentMinutes;
}

button.addEventListener('click', function () {
    let namePrint = (yesName.checked)?chatNick.textContent = resultName():chatNick.textContent = 'Username';
    resultAvatar();
    datePrint();
    checkSpam();
}); 
