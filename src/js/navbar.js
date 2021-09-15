class Navbar {
    burgerButton = document.querySelector(".burger");

    toggleMenu = () => {
        this.burgerButton.addEventListener('click', () => {
            console.log('yes')
        })
        console.log(this.burgerButton)
    }
}

const navbar = new Navbar();

export { navbar as default };