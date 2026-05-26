/* =========================
   MENU RESPONSIVE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* =========================
   CERRAR MENU AL DAR CLICK
========================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* =========================
   NAVBAR SHADOW AL SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});

/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

const hiddenElements =
document.querySelectorAll(
    ".card, .section-title, .bio-content, .project"
);

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* =========================
   EFECTO SCROLL SUAVE EXTRA
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});