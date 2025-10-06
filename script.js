window.addEventListener("scroll", () => {
  console.log("Scrolling...");
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// // ===== Typing Animation in Hero Section =====
// const typed = new Typed(".typing", {
//   strings: ["AI Engineer", "Full Stack Developer", "Automation Enthusiast"],
//   typeSpeed: 80,
//   backSpeed: 40,
//   loop: true
// });

// ===== Navbar Highlight on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== AOS Initialization (Fade Animation) =====
AOS.init({
  duration: 1200,
  once: true
});

// ===== Add Gradient Background Animation =====
const colors = ["#0f172a", "#1e293b", "#334155"];
let currentColor = 0;

function changeBackground() {
  document.body.style.background = `linear-gradient(135deg, ${colors[currentColor]}, ${colors[(currentColor + 1) % colors.length]})`;
  currentColor = (currentColor + 1) % colors.length;
}
setInterval(changeBackground, 6000);
