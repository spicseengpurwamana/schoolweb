burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
menu = document.querySelector('.menu')


burger.addEventListener ('click', ()=>{
    logo.classList.toggle('v-class-resp');
    menu.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})