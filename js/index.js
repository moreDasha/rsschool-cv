document.getElementById("burger-button").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
});

const menuLink = document.querySelectorAll(".nav-menu-link");
for (i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function() {
        document.querySelector("header").classList.remove("open")
    })
}

const mobileMenu = document.querySelector(".header-nav-menu");
const burgerButton = document.getElementById("burger-button");
document.addEventListener( 'click', (e) => {
    const noMobileMenu = e.composedPath().includes(mobileMenu);
    const noBurgerButton = e.composedPath().includes(burgerButton);
    if (! noMobileMenu && ! noBurgerButton) {
        document.querySelector("header").classList.remove("open")
    }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};