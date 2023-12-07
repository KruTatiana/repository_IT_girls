let text = document.getElementById('print_total_price')
text.style.fontWeight = 600;

function calculateTotalPrice(quantity=2,price=15000000) { 
    let x=quantity*price;
    //alert(`Стоимость покупки: ${x.toLocaleString('ru-RU')} рублей`);
    text.textContent = `Стоимость покупки: ${x.toLocaleString('ru-RU')} рублей`;
}