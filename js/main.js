const menu = document.querySelector(".navItem");
const navOpen = document.querySelector(".hamburger-btn");
const navClose = document.querySelector(".close-nav-menu");

navOpen.addEventListener("click", () => {
    menu.classList.add("open");
});
navClose.addEventListener("click", () => {
    menu.classList.remove("open");
});