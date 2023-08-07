const navbar = document.querySelector('#navbar');
const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');

btnOpen.addEventListener('click', showMenu);
btnClose.addEventListener('click', hideMenu);

function showMenu(){
    navbar.classList.add('visible');
}

function hideMenu(){
    navbar.classList.remove('visible');
}