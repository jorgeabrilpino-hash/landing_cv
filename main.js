/* === CURSOR PERSONALIZADO === */
const cursor = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (event) => {
  if (!cursor || !cursorRing) return;
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  cursorRing.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

document.querySelectorAll("a, button, input, textarea").forEach((element) => {
  element.addEventListener("mouseenter", () => cursorRing?.classList.add("hover"));
  element.addEventListener("mouseleave", () => cursorRing?.classList.remove("hover"));
});

/* === NAVBAR Y MENU MOBILE === */
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function updateNavbar() {
  navbar?.classList.toggle("scrolled", window.scrollY > 50);
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("open");
  navLinks?.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.classList.remove("open");
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", updateNavbar);
updateNavbar();

/* === TYPING ANIMATION === */
const phrases = [
  "Desarrollador Web Full Stack",
  "Especialista en IA & Automatización",
  "Líder UX/UI & Frontend",
  "Estudiante Décimo Superior - Tecsup"
];
const typedText = document.querySelector("#typed-text");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typedText) return;
  const currentPhrase = phrases[phraseIndex];
  typedText.textContent = currentPhrase.slice(0, charIndex);

  if (!deleting && charIndex < currentPhrase.length) {
    charIndex += 1;
    setTimeout(typeLoop, 70);
    return;
  }

  if (!deleting && charIndex === currentPhrase.length) {
    deleting = true;
    setTimeout(typeLoop, 2000);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeLoop, 38);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  setTimeout(typeLoop, 350);
}
typeLoop();

/* === PARALLAX HERO === */
const heroContent = document.querySelector(".hero-content");
const ironmanContainer = document.querySelector(".ironman-container");

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  if (heroContent) heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
  if (ironmanContainer) {
    ironmanContainer.style.marginTop = `${scrolled * 0.4}px`;
  }
});

/* === INTERSECTION OBSERVER === */
function countUp(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(start);
  }, 16);
}

document.querySelectorAll(".bar span").forEach((bar) => {
  bar.parentElement?.parentElement?.style.setProperty("--progress", bar.dataset.width || "0");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("animate-in");

    const count = entry.target.querySelector(".count");
    if (count && !count.dataset.done) {
      count.dataset.done = "true";
      countUp(count, Number(count.dataset.target || 0));
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 50, 450)}ms`;
  observer.observe(element);
});

/* === FILTROS DE HABILIDADES === */
const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    skillCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hide", !show);
    });
  });
});

/* === FORMULARIO HTML PURO === */
document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
});
