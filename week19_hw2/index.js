const sectionContainer = document.getElementById('container');


function makeHeader(headerObj) {
  const newHeader = document.createElement('h3');
  const str = JSON.stringify(headerObj);
  newHeader.innerHTML = str;
  sectionContainer.appendChild(newHeader);
}

function makeArticle(articleObj) {
    const newArticle = document.createElement('p');
    const str = JSON.stringify(articleObj);
    newArticle.innerHTML = str;
    sectionContainer.appendChild(newArticle);
}

function makeContent() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=> response.json())
  .then((data)=>{
  data.forEach(el => {
    makeHeader(el.title);
    makeArticle(el.body);
  });
})
}

makeContent()
