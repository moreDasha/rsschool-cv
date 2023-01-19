document.getElementById("burger-button").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
});

document.querySelector(".nav-menu-link").addEventListener("click", function() {
    document.querySelector("header").classList.remove("open")
});

const mobileMenu = document.querySelector(".header-nav-menu");
const burgerButton = document.getElementById("burger-button");

document.addEventListener( 'click', (e) => {
    const noMobileMenu = e.composedPath().includes(mobileMenu);
    const noBurgerButton = e.composedPath().includes(burgerButton);
    if (! noMobileMenu && ! noBurgerButton) {
        document.querySelector("header").classList.remove("open")
    }
});