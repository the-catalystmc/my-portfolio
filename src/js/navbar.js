class Navbar {
    burgerButton = document.querySelector(".burger");
    menu = document.querySelector('.pop-menu');

    toggleMenu = () => {
        let isMenuOpen = false;
        this.burgerButton.addEventListener('click', () => {
            if(!isMenuOpen){
            this.menu.style.display = 'block';
            isMenuOpen = true;
        } else {
            this.menu.style.display = 'none';
            isMenuOpen = false;
        }
        })
    }
}

const navbar = new Navbar();

export { navbar as default };