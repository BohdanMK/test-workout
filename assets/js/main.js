const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const bgImg = document.querySelector('.background');
const body = document.querySelector('body');
console.log(navMenu);

burger.addEventListener('click', event => {
    $this = event.currentTarget;

    navMenu.classList.add('active');
    bgImg.classList.add('active');
    body.classList.add('active');
});

bgImg.addEventListener('click', event => {
    $this = event.currentTarget;

    navMenu.classList.remove('active');
    bgImg.classList.remove('active');
    body.classList.remove('active');

});

