let numbers = [];

for (let a=-10; a<=10; a++) {
  numbers.push(a);
}

(function () {
  let negativeNum = [];
  for (let item of numbers) {
    if (item<0) {
      negativeNum.push(item);
  }
  }
  for (let num of negativeNum) {
    let a = numbers.indexOf(num);
    numbers.splice(a,1);
  }
}());

for (let sqr of numbers) {
  numbers[sqr] = sqr**2;
};

numbers.sort (function (a,b) {
  return b-a;
});

console.log(numbers)
