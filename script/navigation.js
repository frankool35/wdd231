// ==============================
// navigation.js — Responsive Menu
// ==============================

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

// Toggle the navigation visibility when hamburger is clicked
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');
});

// Close the menu when a link is clicked (for smoother UX)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navigation.classList.contains('open')) {
      navigation.classList.remove('open');
      menuButton.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});
