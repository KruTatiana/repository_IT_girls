const userName = document.getElementById('name__input');
const avatar = document.getElementById('link_avatar__input');
const comment = document.getElementById('comment_place__input');
const button = document.getElementById('button_send');
const chatAvatar = document.querySelector('.chat_avatar');
const message = document.querySelector('.chat_message');
const chatNick = document.querySelector('.chat_nick');

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
    let imgLink = avatar.value;
    chatAvatar.setAttribute('src', imgLink);
        };

let checkSpam = () => {
    let str = comment.value;
    let newStr = str.replace(/viagra|xxx/ig, "***");
    console.log(comment.value);
    message.textContent = newStr;
}


button.addEventListener('click', function () {
        resultAvatar();
        chatNick.textContent = resultName();
        checkSpam();
}); 