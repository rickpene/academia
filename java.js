const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click",() => nav.classList.toggle("active"));

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
if (currentScroll > lastScrollTop) {
    // Rolando para baixo -> esconde a navbar
    navbar.classList.add("hide");
} else {
    // Rolando para cima -> mostra a navbar
    navbar.classList.remove("hide");
}
lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
