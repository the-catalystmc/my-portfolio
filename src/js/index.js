import '../scss/style.scss';
import navbar from './navbar';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Starter', 'Text'], ' ');
//     element.classList.add('hello');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

window.addEventListener('load', () => {
    navbar.toggleMenu();
})