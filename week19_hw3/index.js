const inputTitle = document.getElementById('title');
const inputBody = document.getElementById('body');
const postsContainer = document.querySelector('.posts_container');

function makePost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: `${inputTitle.value}`,
      body: `${inputBody.value}`,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((data)=>{
    const headerEl = document.createElement('h3');
    const postEl = document.createElement('p');
    headerEl.innerHTML = data.title;
    postEl.innerHTML = data.body;
    postsContainer.appendChild(headerEl);
    postsContainer.appendChild(postEl);
    inputTitle.value = '';
    inputBody.value = '';
  })
}

document.getElementById('make_post').addEventListener('click',makePost);