class ToggleMenu {
    constructor(openButton, menu, closeButton) {
        this.openButton = openButton;
        this.menu = menu;
        this.closeButton = closeButton;
    }

    toggleMenu = () => {
        this.openButton.addEventListener('click', () => {
            this.menu.classList.toggle('show');
        })
        this.closeButton.addEventListener('click', () => {
            this.menu.classList.toggle('show');
        })
    }
}

export default ToggleMenu;