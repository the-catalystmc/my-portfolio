import '../scss/style.scss';
import ToggleMenu from './toggleMenu';
import myData from './projectsData';

const burgerButton = document.querySelector(".burger");
const menu = document.querySelector('.pop-menu');
const closeButton = document.querySelector('.close-button');

const navbar = new ToggleMenu(burgerButton, menu, closeButton);

window.addEventListener('load', () => {
    navbar.toggleMenu();
    console.log(myData);
})