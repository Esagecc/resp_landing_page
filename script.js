const hamburger = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("open");
});

