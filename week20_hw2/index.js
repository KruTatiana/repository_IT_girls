const selectEl = document.getElementById('attribute_value');
const typeNumber = document.getElementById('type_number');
const buttonSearch = document.getElementById('search_button');
const article = document.querySelector('.article');
const errorOutput = document.querySelector('.error');

function searchInfo() {
  let selectedValue = selectEl.options[selectEl.selectedIndex].value;
  const postEl = document.createElement('div');
  postEl.textContent = 'Идёт загрузка...';
  try{
    fetch(`https://swapi.dev/api/${selectedValue}/${typeNumber.value}/`)
    .then(response => response.json())
    .then((data)=>{
      if (data?.detail){
        return Promise.reject(data.detail);
      }
      console.log(data);
      console.log(typeof data);
      const keysArray = Object.keys(data);
      const valuesArray = [];
      for(let i in data){
        let a = data[i];
        valuesArray.push(a);
      }
      let string ='';
      for(let i=0;i<=5;i+=1){
        string += keysArray[i] + ': ' + valuesArray[i] + '<br>';
      }
      article.textContent = '';
      if(string){
        errorOutput.textContent = '';
      }
      postEl.innerHTML = string;
      article.appendChild(postEl);
      if(!data){
        throw new Error('cервер недоступен');
      }
      })
      .catch(err =>{
        errorOutput.textContent = ''
        errorOutput.textContent = 'Ошибка: '+ err;
      })
  }finally{
    typeNumber.value = '';
  }
}

buttonSearch.addEventListener('click',searchInfo);