const word = document.getElementById('word');

let alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

let firstLetter = Math.round(Math.random() * alphabet.length);
let secondLetter = Math.round(Math.random() * alphabet.length);
let thirdLetter = Math.round(Math.random() * alphabet.length);
let foursLetter = Math.round(Math.random() * alphabet.length);

word.textContent = alphabet[firstLetter].concat(alphabet[secondLetter],alphabet[thirdLetter],alphabet[foursLetter]);