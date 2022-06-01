
let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click',() => {
    box.click();
})
box.addEventListener('click', (e) => {
    box.style.backgroundColor = "green";
})