let image = document.getElementById('image');

let b=1
function pressForward() { 
    b = b+1;
    let result = `./assets/img/${b}.jpg`;
    image.src = result;
    return b;
    }

function pressBack() {
    b = b-1;
    let result = `./assets/img/${b}.jpg`;
    image.src = result;
    return b;
};