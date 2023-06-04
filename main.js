const burger = document.querySelector('.burger'),
      mobile_nav = document.querySelector('.mobile-nav'),
      overlay = document.querySelector('.mobile-overlay'),
      nav = document.querySelector('header'),
      icon = document.querySelector('.burger img')
let n = 0;

burger.addEventListener('click', () => {

    mobile_nav.classList.toggle('block')
    overlay.classList.toggle('block');
    nav.classList.toggle('shadow');
    n++;
    changeIcon(n);
})

function changeIcon(i) {
    i%2 == 0 ? icon.src = './assets/images/icon-menu.svg' : icon.src = './assets/images/icon-menu-close.svg'
}