// Movimiento suave de logos al hacer scroll
window.addEventListener("scroll", () => {
  const topRow = document.querySelector(".row-top");
  const bottomRow = document.querySelector(".row-bottom");

  // No mover en pantallas pequeñas (menos de 768px)
  if (window.innerWidth < 768) {
    if (topRow) topRow.style.transform = "translateX(0)";
    if (bottomRow) bottomRow.style.transform = "translateX(0)";
    return;
  }

  const scrollY = window.scrollY;

  // Movimiento horizontal tipo carrusel inverso SOLO en desktop
  if (topRow) topRow.style.transform = `translateX(${scrollY * 0.06}px)`;       // Derecha
  if (bottomRow) bottomRow.style.transform = `translateX(-${scrollY * 0.06}px)`;   // Izquierda
});

// También ajustar en redimensionamiento de ventana
window.addEventListener("resize", () => {
  const topRow = document.querySelector(".row-top");
  const bottomRow = document.querySelector(".row-bottom");
  
  if (window.innerWidth < 768) {
    if (topRow) topRow.style.transform = "translateX(0)";
    if (bottomRow) bottomRow.style.transform = "translateX(0)";
  }
});











// Elementos del DOM
const mainNav = document.getElementById('mainNav');
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const toggleSpans = mobileToggle.querySelectorAll('span');

// Estado del menú
let menuOpen = false;

// Toggle menú móvil
function toggleMobileMenu() {
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animación a X
        toggleSpans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        toggleSpans[1].style.opacity = '0';
        toggleSpans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Animación a hamburguesa
        toggleSpans[0].style.transform = 'rotate(0) translate(0, 0)';
        toggleSpans[1].style.opacity = '1';
        toggleSpans[2].style.transform = 'rotate(0) translate(0, 0)';
    }
}

// Cerrar menú móvil
function closeMobileMenu() {
    if (menuOpen) {
        mobileToggle.click();
    }
}

// Efecto scroll en el menú
function handleScroll() {
    if (window.scrollY > 50) {
        mainNav.classList.add('compact');
    } else {
        mainNav.classList.remove('compact');
    }
}

// Cerrar menú al redimensionar a desktop
function handleResize() {
    if (window.innerWidth > 1024 && menuOpen) {
        closeMobileMenu();
    }
}

// Event Listeners
mobileToggle.addEventListener('click', toggleMobileMenu);
menuOverlay.addEventListener('click', closeMobileMenu);
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);

// Cerrar menú al hacer clic en enlaces (móvil)
document.querySelectorAll('.mobile-nav .nav-item, .mobile-reserve .reserve-btn').forEach(item => {
    item.addEventListener('click', closeMobileMenu);
});

// Inicializar
window.dispatchEvent(new Event('scroll'));