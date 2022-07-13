import './styles/main.scss';

const nav = document.querySelector('.nav');
const burger = document.querySelector('.nav__burger');

function handleBurgerClick() {
  nav.classList.toggle('nav--active');
}

burger.addEventListener('click', handleBurgerClick);
