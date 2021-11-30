
const container = document.querySelector('#grid');

function cell() {
const pixel = document.createElement('div');
pixel.classList.add("pixel");
container.appendChild(pixel);
}

function creategrid(n){

clearing();
for (let i = 1; i<=n; i++)
{
    cell();
}
paint()
}

function clearing(){
    const paint = document.querySelectorAll('.pixel');
    console.log('abbaba')
    paint.forEach((div) => {div.classList.remove('paint')});
}


function paint (){
const paint = document.querySelectorAll('.pixel');
paint.forEach((div) => {
    div.addEventListener('mouseover',() => {
        div.classList.add('paint');
    });
});
}