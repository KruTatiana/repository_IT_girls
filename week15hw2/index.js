const citiesList = document.querySelector('.cities_list');
const extra = document.querySelector('.extremum');


let cities = ['Москва', 'Самара', 'Милуоки', 'Ереван', 'Санкт-Петербург', 'Лос-Анджелес'];
let temp = [];

for (let city of cities) {
  let tempItem = prompt(`Введите температуру для ${city}`);
  temp.push(tempItem);
  const listItem = document.createElement('li');
  listItem.textContent = `Температура в ${city}: ${tempItem} \u00B0C;`;
  citiesList.append(listItem);
}

(function() {
let maxTemp = Math.max(...temp);
let minTemp = Math.min(...temp);
const maxTemStr = document.createElement('p');
const minTemStr = document.createElement('p');
maxTemStr.textContent = `Максимальная температура: ${maxTemp} \u00B0C;`;
minTemStr.textContent = `Минимальная температура: ${minTemp} \u00B0C;`;
extra.append(maxTemStr);
extra.append(minTemStr);
}());