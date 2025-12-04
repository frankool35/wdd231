// scripts/nav.js
// Handles mobile navigation menu toggle

export function initMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!menuBtn || !navLinks) return;

  // Toggle menu open/close
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Accessibility label update
    if (navLinks.classList.contains("show")) {
      menuBtn.setAttribute("aria-label", "Open Menu");
    } else {
      menuBtn.setAttribute("aria-label", "Close Menu");
    }
  });

  // Close menu when clicking a link (optional but nice UX)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.add("hidden");
      menuBtn.setAttribute("aria-label", "Open Menu");
    });
  });
}
