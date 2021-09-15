class Navbar {
    isMenuOpen = false;
    burgerButton = document.querySelector(".burger");
    menu = document.querySelector('.pop-menu');
    closeButton = document.querySelector('.close-button');

    toggleMenu = () => {
        this.burgerButton.addEventListener('click', () => {
            if (!this.isMenuOpen) {
                this.menu.style.display = 'block';
                this.isMenuOpen = true;
            } else {
                this.menu.style.display = 'none';
                this.isMenuOpen = false;
            }
        })
    }

    closeMenu = () => {
        this.closeButton.addEventListener('click', () => {
            this.menu.style.display = 'none';
            this.isMenuOpen = false;
        })
    }
}

const navbar = new Navbar();

export { navbar as default };