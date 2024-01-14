const button = document.getElementById('greenButton');
const priceFirst = document.querySelector('.price1 span.number');
const priceSecond = document.querySelector('.price2 span.number');
const priceThird = document.querySelector('.price3 span.number');
const priceFourth = document.querySelector('.price4 span.number');
const resultPrice = document.querySelector('.result');


function makeDiscount() {
        let result = ((+ priceFirst.innerHTML)+(+ priceSecond.innerHTML)+(+ priceThird.innerHTML)+(+ priceFourth.innerHTML))*0.8;
        resultPrice.textContent = result; 
        console.log (result);
}

button.addEventListener('click', makeDiscount);
