document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded");

  // Example: Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          target.scrollIntoView({ behavior: "smooth" });
      });
  });
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close nav when a link is clicked (optional)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
