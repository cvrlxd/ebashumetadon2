let navToogle = document.querySelector('.navToogle');
let nav = document.querySelector('.header__nav');
navToogle.addEventListener('click', () => {
  nav.classList.toggle('header__show');
})

let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 1000) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }


    console.log (scrollPos);

})

console.log (header);

Fancybox.bind("[data-fancybox]", {
    
  });