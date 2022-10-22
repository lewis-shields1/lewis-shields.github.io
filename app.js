const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('li a');

hamburger.addEventListener('click', function(){
    this.classList.toggle('close');
    nav.classList.toggle('reveal-nav');
    menu.classList.toggle('reveal-items');
})

  links.forEach(item => {
    item.addEventListener('click', (event) => {
    hamburger.classList.toggle('close');
    nav.classList.toggle('reveal-nav');
    menu.classList.toggle('reveal-items');
    })
  })


