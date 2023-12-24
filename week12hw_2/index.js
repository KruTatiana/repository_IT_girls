const poem = document.getElementById('poem');

const textString = poem.innerText;
console.log(textString);
//console.log(textString.length);

let result = textString.replace(/\;/g,';\n');

console.log(result.length);

let substring = textString.replace(/\s/g, '');

let newText = result.substring(28,50);

let replacedText = newText.replace('клён','дубе');

let replacedText2 = result.toUpperCase();

let replacedText3 = result.replaceAll('клён','дуб');

let index = textString.indexOf('моря');

let modifiedText = replacedText[0].toUpperCase()+replacedText.slice(1);

console.log(`1. Количество символов в тексте: ${textString.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);