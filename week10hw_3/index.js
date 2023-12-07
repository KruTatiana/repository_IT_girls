let image = document.getElementById('image');
let previous = document.getElementById('button_previous');
let next = document.getElementById('button_next')

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