const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];

class Transport {
  constructor(type, price, brand, image){
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.image = image;
  }

  getInfo(){
    this.element = document.createElement('div');
    this.imageEl = document.createElement('img');
    this.brandEl = document.createElement('p');
    document.body.prepend(this.element);
    this.element.appendChild(this.brandEl);
    this.element.appendChild(this.imageEl);
    this.imageEl.setAttribute('src', this.image);
    this.brandEl.innerText = this.brand;
    this.imageEl.style.width = '20vw';
    this.brandEl.style.fontSize = '20px';
    this.brandEl.style.fontWeight = 'bold';
  }

  getPrice(){
    this.priceEl = document.createElement('p');
    this.priceEl.innerText = 'Цена ' + this.price + ' р.';
    this.element.appendChild(this.priceEl);
  }
}

class Car extends Transport {
  constructor (type, price, brand, image, doors){
    super(type, price, brand, image);
    this.doors = doors;
  }

  getDoorCount(){
    this.doorsEl = document.createElement('p');
    this.doorsEl.innerText ='Количество дверей ' + this.doors + '.';
    this.element.appendChild(this.doorsEl);
  }
}

class Bike extends Transport {
  constructor (type, price, brand, image, maxSpeed){
    super(type, price, brand, image);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed(){
    this.maxSpeedEl = document.createElement('p');
    this.maxSpeedEl.innerText ='Максимальная скорость ' + this.maxSpeed + ' км/ч.';
    this.element.appendChild(this.maxSpeedEl);
  }
}

let myArray = [];

for (i=0; i<data.length; i++){
  if (data[i].type === 'car'){
    const carObj = new Car(data[i].type, data[i].price, data[i].brand, data[i].image, data[i].doors);
    myArray.push(carObj);
    carObj.getInfo();
    carObj.getPrice();
    carObj.getDoorCount();
  } else if (data[i].type === 'bike'){
    const bikeObj= new Bike(data[i].type, data[i].price, data[i].brand, data[i].image, data[i].maxSpeed);
    myArray.push(bikeObj);
    bikeObj.getInfo();
    bikeObj.getPrice();
    bikeObj.getMaxSpeed();
    }
}

console.log(myArray);