/* -------- SLIDER -------- */
const slides = document.querySelectorAll(".slide");
let index = 0;

// Solo ejecutar si hay slides
if (slides.length > 0) {
    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 4500);
}

/* -------- TEXTO QUE SE ESCRIBE -------- */
const words = [
    "Desarrollo Web",
    "Software personalizado",
    "Optimización de Procesos",
    "Integración de APIs",
    "AI y Machine Learning",
    "Bases de Datos",
    "Automatización"
];

let i = 0, j = 0, deleting = false;
const typed = document.querySelector('.typed');
const speed = 75;

function typeEffect() {
    if (!typed) return; // Salir si no existe el elemento
    
    let word = words[i];

    if (!deleting) {
        typed.textContent = word.slice(0, j++);
        if (j === word.length + 1) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typed.textContent = word.slice(0, j--);
        if (j === 0) {
            deleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? speed / 1.4 : speed);
}

// Solo iniciar si existe el elemento
if (typed) {
    typeEffect();
}

// =========================
// LOGOS – Movimiento Scroll
// =========================
const topRow = document.querySelector(".row-top");
const bottomRow = document.querySelector(".row-bottom");

function updateLogoScroll() {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        topRow && (topRow.style.transform = "translateX(0)");
        bottomRow && (bottomRow.style.transform = "translateX(0)");
        return;
    }

    const move = window.scrollY * 0.06;
    topRow && (topRow.style.transform = `translateX(${move}px)`);
    bottomRow && (bottomRow.style.transform = `translateX(-${move}px)`);
}

// Solo añadir listeners si existen los elementos
if (topRow || bottomRow) {
    window.addEventListener("scroll", updateLogoScroll);
    window.addEventListener("resize", updateLogoScroll);
    // Ejecutar al cargar
    updateLogoScroll();
}

// =========================
// MENÚ MÓVIL
// =========================
const mainNav = document.getElementById("mainNav");
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

let menuOpen = false;

// Solo ejecutar código del menú si existen los elementos necesarios
if (mobileToggle && mobileMenu && menuOverlay) {
    const toggleSpans = mobileToggle.querySelectorAll("span");

    function toggleMobileMenu() {
        menuOpen = !menuOpen;

        mobileMenu.classList.toggle("active", menuOpen);
        menuOverlay.classList.toggle("active", menuOpen);
        document.body.style.overflow = menuOpen ? "hidden" : "auto";

        // Animación hamburguesa/X
        if (toggleSpans.length >= 3) {
            toggleSpans[0].style.transform = menuOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)";
            toggleSpans[1].style.opacity = menuOpen ? "0" : "1";
            toggleSpans[2].style.transform = menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)";
        }
    }

    function closeMobileMenu() {
        if (menuOpen) toggleMobileMenu();
    }

    // Compactar menú al hacer scroll
    function handleScroll() {
        if (mainNav) {
            mainNav.classList.toggle("compact", window.scrollY > 50);
        }
    }

    // Cerrar si pasa a escritorio
    function handleResize() {
        if (window.innerWidth > 1024) closeMobileMenu();
    }

    // Añadir event listeners
    mobileToggle.addEventListener("click", toggleMobileMenu);
    menuOverlay.addEventListener("click", closeMobileMenu);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cerrar menú al hacer clic en enlaces móviles
    const mobileLinks = document.querySelectorAll(".mobile-nav .nav-item, .mobile-reserve .reserve-btn");
    if (mobileLinks.length > 0) {
        mobileLinks.forEach(item => item.addEventListener("click", closeMobileMenu));
    }

    // Ejecutar al cargar
    handleScroll();
} else {
    // Si no hay menú móvil, solo manejamos el scroll para la navbar
    function handleScroll() {
        if (mainNav) {
            mainNav.classList.toggle("compact", window.scrollY > 50);
        }
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
}

// Inicializar funciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Si tienes más inicializaciones, puedes ponerlas aquí
});
