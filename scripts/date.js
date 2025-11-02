// ==============================
// date.js — Dynamic Footer Dates
// ==============================

// Display the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display the last modified date of the document
document.getElementById("lastModified").textContent = document.lastModified;

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
   menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";

  });



