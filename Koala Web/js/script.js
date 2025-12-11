/* ========================
   SLIDER — Optimizado
======================== */
const slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 1) {
    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 4500);
}

/* ========================
   TEXTO ESCRITO — Optimizado
======================== */
const words = [
  "Desarrollo Web",
  "Software presonalizado",
  "Optimización de Procesos",
  "Integración de APIs",
  "AI y Machine Learning",
  "Bases de Datos",
  "Automatización"
];

let i = 0, j = 0, deleting = false;
const typed = document.querySelector(".typed");
const speed = 75;

(function typeEffect() {
    const word = words[i];

    typed.textContent = deleting
        ? word.slice(0, --j)
        : word.slice(0, ++j);

    if (!deleting && j === word.length) {
        deleting = true;
        return setTimeout(typeEffect, 1000);
    }

    if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? speed * 0.7 : speed);
})();


/* ================================
   LOGOS Scroll — Ultra Optimizado
================================ */
const topRow = document.querySelector(".row-top");
const bottomRow = document.querySelector(".row-bottom");

let lastScroll = 0;
let isMobile = window.innerWidth < 768;

function updateLogoScroll() {
    const scrollY = lastScroll * 0.06;

    if (!isMobile) {
        if (topRow) topRow.style.transform = `translateX(${scrollY}px)`;
        if (bottomRow) bottomRow.style.transform = `translateX(-${scrollY}px)`;
    }
}

window.addEventListener("scroll", () => {
    lastScroll = window.scrollY;
    requestAnimationFrame(updateLogoScroll);
});

window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 768;
    if (isMobile) {
        if (topRow) topRow.style.transform = "translateX(0)";
        if (bottomRow) bottomRow.style.transform = "translateX(0)";
    }
});


/* ================================
   MENÚ MÓVIL — Optimizado
================================ */

// Cache de elementos
const mainNav = document.getElementById("mainNav");
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const toggleSpans = mobileToggle ? mobileToggle.querySelectorAll("span") : null;

let menuOpen = false;

// Funcion compacta de toggle
function toggleMobileMenu(forceClose = false) {
    if (!mobileMenu || !menuOverlay) return;

    menuOpen = forceClose ? false : !menuOpen;

    mobileMenu.classList.toggle("active", menuOpen);
    menuOverlay.classList.toggle("active", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    // btn hamburguesa
    if (toggleSpans) {
        toggleSpans[0].style.transform = menuOpen ? "rotate(45deg) translate(5px, 5px)" : "";
        toggleSpans[1].style.opacity = menuOpen ? "0" : "";
        toggleSpans[2].style.transform = menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "";
    }
}

// Navbar compactado en scroll
window.addEventListener("scroll", () => {
    if (mainNav) {
        const shrink = window.scrollY > 50;
        mainNav.classList.toggle("compact", shrink);
    }
});

// Cerrar menú si pasa a escritorio
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) toggleMobileMenu(true);
});

// Acción botón hamburguesa
if (mobileToggle) {
    mobileToggle.addEventListener("click", () => toggleMobileMenu());
}

// Cerrar al tocar overlay
if (menuOverlay) {
    menuOverlay.addEventListener("click", () => toggleMobileMenu(true));
}

// Delegación de eventos para cerrar menú en clics internos
document.addEventListener("click", (e) => {
    if (e.target.matches(".mobile-nav .nav-item, .mobile-reserve .reserve-btn")) {
        toggleMobileMenu(true);
    }
});
