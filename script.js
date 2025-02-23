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
